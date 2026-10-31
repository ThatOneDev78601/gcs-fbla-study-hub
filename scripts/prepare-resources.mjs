import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {buildArchive,normalizeName} from '../src/lib/archive.mjs';
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const events=read('src/data/events.json');
const archive=buildArchive(read('research/historical-resource-inventory.json'),events,read('research/archive-related-topics.json'));
const guides=read('research/current-mba-guides.json').map(guide=>{
  const event=events.find(event=>normalizeName(event.name)===normalizeName(guide.title.replace(/ Study Guide$/,'')));
  assert(event,'No current event for '+guide.title);
  return {...guide,eventId:event.id,publisher:'MBA Research',season:'2026–2027 publisher collection',access:'Free PDF; some referenced LAP lessons require payment',checked:'2026-10-27',note:guide.url.includes('/2025/')?'The publisher includes this 2025-dated PDF in its current collection. Confirm the objective list against the current event guide.':''};
});
assert.equal(guides.length,43);
writeFileSync('src/data/archive.json',JSON.stringify(archive,null,2)+'\n');
writeFileSync('src/data/current-guides.json',JSON.stringify(guides,null,2)+'\n');
console.log(`Prepared ${archive.length} archive entries (${archive.reduce((n,g)=>n+g.files.length,0)} files) and ${guides.length} current event guides.`);
const official=read('research/official-practice-links.json');
const tests=official.tests.flatMap(test=>{
  const names=test.title==='Introduction to Parliamentary Procedure & Parliamentary Procedure Practice Test'
    ?['Introduction to Parliamentary Procedure','Parliamentary Procedure']
    :[test.title.replace(/ Practice Test$/,'')];
  return names.map(name=>{
    const event=events.find(event=>normalizeName(event.name)===normalizeName(name));
    assert(event,'No current event for official practice: '+test.title);
    const url=new URL(test.url);
    assert.equal(url.origin,'https://connect.fbla.org');
    assert.equal(url.searchParams.get('courseId'),'351');
    assert(url.searchParams.get('contentId'));
    return {eventId:event.id,title:test.title,url:test.url};
  });
});
assert.equal(tests.length,44);
assert.equal(new Set(tests.map(test=>test.eventId)).size,tests.length);
writeFileSync('src/data/official-practice.json',JSON.stringify({...official,tests},null,2)+'\n');
console.log(`Linked ${official.tests.length} official FBLA sample tests to ${tests.length} events; no questions or credentials copied.`);
