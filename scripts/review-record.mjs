import {readFileSync,writeFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const events=read('src/data/events.json'),modules=new Map(read('src/data/modules.json').map(m=>[m.id,m])),coverage=read('research/coverage.json');
// Lessons written for the November 2, 2026 completion plan carry this review date.
const planDate='2026-11-02';
const conflicts={'accounting':'Coursework eligibility date conflict (Maryland May 1, 2026 versus national May 1, 2027).','business-plan':'Captured guide shows an older school year in the cover instructions.','community-service-project':'Eligible activity period and school year come from an earlier season.','local-chapter-annual-business-report':'Reporting period and school year come from an earlier season.','mobile-application-development':'Captured guide still names Windows Phone as a platform.','supply-chain-management':'Captured topic title and detailed planning text appear inconsistent.'};
const record={generated:planDate,basis:'FBLA lesson completion plan, November 2, 2026; Maryland event guides captured October 27, 2026.',
statusKey:{drafted:'Lesson written with worked example, practice task, glossary, and checked questions; not yet independently reviewed against every published objective.','existing-lesson-only':'Knowledge area is mapped only to lessons written before the completion plan.','needs-confirmation':'Season-specific rule must be confirmed with the official source or adviser before it is taught.'},
note:'No event is marked complete. A reviewer must check each objective and scored requirement against the linked lesson sections, record the result, and sign and date it, as the plan requires.',
events:events.map(e=>{const fresh=e.moduleIds.filter(id=>modules.get(id).reviewed===planDate);return{eventId:e.id,event:e.name,format:e.format,
newLessons:fresh.map(id=>{const m=modules.get(id);return{id,title:m.title,sections:m.sections.map(s=>s.heading),hasWorkedExample:m.sections.some(s=>s.example),hasPracticeTask:m.sections.some(s=>s.practice),questions:m.questions.length}}),
knowledgeAreas:coverage.filter(c=>c.eventId===e.id).map(c=>{const newIds=c.lessonIds.filter(id=>fresh.includes(id));return{area:c.area,source:'Maryland event guide, knowledge areas',lessonIds:c.lessonIds,newLessonIds:newIds,status:newIds.length?'drafted':'existing-lesson-only',reviewer:null,reviewDate:null}}),
confirmBeforeWriting:conflicts[e.id]?{issue:conflicts[e.id],status:'needs-confirmation'}:null,status:'drafted',reviewer:null,reviewDate:null}})};
writeFileSync('research/lesson-review-record.json',JSON.stringify(record,null,2)+'\n');
const areas=record.events.flatMap(e=>e.knowledgeAreas);
console.log('Review record: '+record.events.length+' events, '+areas.filter(a=>a.status==='drafted').length+' of '+areas.length+' knowledge areas with new lessons; all awaiting review.');
