import {readFileSync,existsSync} from 'node:fs';import assert from 'node:assert/strict';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const events=read('src/data/events.json'),modules=read('src/data/modules.json'),sources=[...read('src/data/sources.json'),...read('src/data/additional-sources.json')];
assert.equal(events.length,76,'Expected all 76 national high-school events.');
const unique=(items,label)=>assert.equal(new Set(items).size,items.length,'Duplicate '+label);
unique(events.map(e=>e.id),'event ID');unique(modules.map(m=>m.id),'lesson ID');unique(modules.flatMap(m=>m.questions.map(q=>q.id)),'question ID');
const sourceIds=new Set(sources.map(s=>s.id)),moduleMap=new Map(modules.map(m=>[m.id,m]));
for(const m of modules){assert(m.title&&m.summary,m.id+' lacks metadata');assert(m.sections.length>=3,m.id+' needs substantive teaching sections');assert(m.terms.length>=2,m.id+' needs a glossary');assert(m.questions.length>=5,m.id+' needs reviewed questions');assert(m.sections.some(s=>s.example),m.id+' needs a worked example');assert(m.sourceIds.every(id=>sourceIds.has(id)),m.id+' has an unknown source');assert(existsSync('src/content/lessons/'+m.id+'.md'),m.id+' lacks Markdown');
for(const s of m.sections)assert(s.paragraphs.length&&s.paragraphs.every(p=>p.trim().length>25),m.id+' has empty teaching');
for(const q of m.questions){assert(q.prompt&&q.explanation.length>20,q.id+' lacks explanation');assert(q.choices.length===4&&new Set(q.choices).size===4,q.id+' requires 4 distinct choices');assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id+' has invalid answer')}}
for(const e of events){assert(e.moduleIds.length>=4,e.name+' needs at least four relevant lessons');assert(e.moduleIds.every(id=>moduleMap.has(id)),e.name+' references missing lesson');assert(e.sourceUrl.startsWith('https://'),e.name+' lacks official source');assert(e.gradeMax>=e.gradeMin&&e.teamMax>=e.teamMin);if(e.format==='Test'){assert(e.moduleIds.reduce((n,id)=>n+moduleMap.get(id).questions.length,0)>=20,e.name+' lacks 20 questions');assert(e.knowledgeAreas.length,e.name+' has no topic scope')}for(const s of Object.values(e.stages))assert(s.summary&&s.deadline&&s.tools.length&&s.checklist.length,e.name+' has incomplete stage');}
assert.equal(events.find(e=>e.id==='marketing').format,'Test');assert.equal(events.find(e=>e.id==='coding-and-programming').format,'Submission');assert.equal(events.find(e=>e.id==='computer-applications').format,'State only');assert.equal(events.find(e=>e.id==='introduction-to-fbla').weights.length,0);
const coverage=read('research/coverage.json'),missing=coverage.filter(c=>!c.lessonIds.length);
const eventMap=new Map(events.map(e=>[e.id,e]));for(const c of coverage){assert(c.lessonIds.every(id=>moduleMap.has(id)),'Invalid coverage reference');assert(c.lessonIds.every(id=>eventMap.get(c.eventId).moduleIds.includes(id)),c.eventId+' maps '+c.area+' to a lesson not assigned to the event')}
if(missing.length){console.error('Unmapped knowledge areas:',missing);process.exitCode=1}else console.log('Content checks passed: 76 events, '+modules.length+' lessons, '+coverage.length+' knowledge areas mapped, all test banks ≥20 questions.');

