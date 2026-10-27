import {readFileSync,writeFileSync} from 'node:fs';
const path='src/data/additional-sources.json';
const sources=JSON.parse(readFileSync(path,'utf8'));
for(const [id,title,publisher,url,description] of [
 ['ftc-advertising','Advertising and marketing guidance','Federal Trade Commission','https://www.ftc.gov/business-guidance/advertising-marketing','Truthful advertising, claims and endorsements.'],
 ['copyright-visual','Copyright for visual artists','U.S. Copyright Office','https://www.copyright.gov/engage/visual-artists/','Ownership and permissions for visual creative work.']
])if(!sources.some(s=>s.id===id))sources.push({id,title,publisher,url,description,type:'Official reference',season:'Living reference',access:'Free',status:'Current',checked:'2026-10-27'});
writeFileSync(path,JSON.stringify(sources,null,2)+'\n');
