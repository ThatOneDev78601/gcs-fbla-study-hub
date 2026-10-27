import {test} from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const events=JSON.parse(readFileSync('src/data/events.json','utf8'));
test('Maryland formats remain distinct from later stages',()=>{const marketing=events.find(e=>e.id==='marketing');assert.equal(marketing.stages.district.format,'Test');assert.equal(marketing.stages.state.format,'Test & role play');const coding=events.find(e=>e.id==='coding-and-programming');assert.match(coding.stages.district.summary,/5–10-slide/);assert.deepEqual(coding.stages.district.tools,['checklist']);assert.equal(events.filter(e=>e.format==='State only').length,3)});
test('introductory grade restrictions and uncertain eligibility remain explicit',()=>{assert(events.filter(e=>e.name.startsWith('Introduction to ')).every(e=>e.gradeMax===10));assert(events.find(e=>e.id==='accounting').notes.some(n=>n.includes('2027')));assert.equal(events.find(e=>e.id==='future-business-leader').weights.length,0)});
test('all stages have sourced preparation instructions',()=>{for(const e of events){for(const s of Object.values(e.stages)){assert(s.checklist.length);assert(s.tools.length);assert(s.minutes>0)}}});

