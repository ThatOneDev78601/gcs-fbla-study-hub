import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const normal=s=>s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
const packs=['business','technical','performance','supplemental'].map(name=>read('src/data/'+name+'-content.json'));
const modules=packs.flatMap(p=>p.modules);
const events=read('src/data/events.json');
const mapping=new Map(),coverageMapping=new Map();
for(const pack of packs){for(const[name,ids]of Object.entries(pack.eventModules??{})){const key=normal(name);mapping.set(key,[...new Set([...(mapping.get(key)??[]),...ids])])}for(const[name,areas]of Object.entries(pack.coverage??{})){const key=normal(name);coverageMapping.set(key,{...(coverageMapping.get(key)??{}),...areas})}}
const moduleIds=new Set(modules.map(m=>m.id));
const coverage=[];
for(const event of events){event.moduleIds=mapping.get(normal(event.name))??[];
if(event.id==='computer-applications')event.moduleIds=['perf-office-data','office-spreadsheets','office-documents','office-presentations','office-integration'];
if(event.id==='future-business-leader')event.knowledgeAreas=Object.keys(coverageMapping.get(normal(event.name))??{});
if(!event.moduleIds.length)throw new Error('Missing curriculum for '+event.name);
for(const id of event.moduleIds)if(!moduleIds.has(id))throw new Error('Unknown module '+id+' for '+event.name);
const areas=coverageMapping.get(normal(event.name))??{};
for(const area of event.knowledgeAreas){const key=Object.keys(areas).find(k=>normal(k)===normal(area));coverage.push({eventId:event.id,area,lessonIds:key?areas[key]:[],status:key?'Mapped to lessons':'Needs editorial mapping'})}
if(event.stages.national.format==='Test')event.stages.national.minutes=50;
}
writeFileSync('src/data/events.json',JSON.stringify(events,null,2)+'\n');
writeFileSync('src/data/modules.json',JSON.stringify(modules,null,2)+'\n');
mkdirSync('src/content/lessons',{recursive:true});
const escapeCell=s=>s.replace(/\|/g,'\\|').replace(/\n/g,' ');
for(const m of modules){let md='---\ntitle: '+JSON.stringify(m.title)+'\nsummary: '+JSON.stringify(m.summary)+'\nsourceIds: '+JSON.stringify(m.sourceIds)+'\nreviewed: "2026-10-27"\n---\n\n';
for(const s of m.sections){md+='## '+s.heading+'\n\n'+s.paragraphs.join('\n\n')+'\n\n';if(s.bullets?.length)md+=s.bullets.map(b=>'- '+b).join('\n')+'\n\n';if(s.table){md+='| '+s.table.headers.map(escapeCell).join(' | ')+' |\n| '+s.table.headers.map(()=>'---').join(' | ')+' |\n'+s.table.rows.map(row=>'| '+row.map(escapeCell).join(' | ')+' |').join('\n')+'\n\n'}if(s.example)md+='> **Work through an example**\n>\n> '+s.example.scenario+'\n>\n> '+s.example.solution+'\n\n';}
md+='## Key terms to remember\n\n'+m.terms.map(t=>'**'+t.term+'.** '+t.definition).join('\n\n')+'\n';
writeFileSync('src/content/lessons/'+m.id+'.md',md)}
mkdirSync('research',{recursive:true});writeFileSync('research/coverage.json',JSON.stringify(coverage,null,2)+'\n');
console.log('Prepared '+modules.length+' original lessons for '+events.length+' events; '+modules.reduce((n,m)=>n+m.questions.length,0)+' original questions.');

