import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const official=JSON.parse(readFileSync('src/data/official-practice.json','utf8'));
const events=JSON.parse(readFileSync('src/data/events.json','utf8'));

test('official links cover only verified events and preserve the shared parliamentary test',()=>{
  assert.equal(official.tests.length,44);
  assert.equal(new Set(official.tests.map(test=>test.eventId)).size,44);
  for(const entry of official.tests){
    assert(events.some(event=>event.id===entry.eventId));
    const url=new URL(entry.url);
    assert.equal(url.origin,'https://connect.fbla.org');
    assert.equal(url.pathname,'/glenelg-country-school/memberhome.php');
    assert.deepEqual([...url.searchParams.keys()].sort(),['action','contentId','courseId']);
    assert.equal(url.searchParams.get('courseId'),'351');
  }
  const get=id=>official.tests.find(test=>test.eventId===id);
  assert.equal(new URL(get('computer-problem-solving').url).searchParams.get('contentId'),'1736');
  assert.equal(get('parliamentary-procedure').url,get('introduction-to-parliamentary-procedure').url);
  assert.equal(get('introduction-to-fbla'),undefined);
  assert.equal(get('coding-and-programming'),undefined);
});

test('every district test event has a verified link or the explicitly unlisted Introduction to FBLA case',()=>{
  for(const event of events.filter(event=>event.format==='Test')){
    const linked=official.tests.some(test=>test.eventId===event.id);
    assert.equal(linked,event.id!=='introduction-to-fbla',event.name);
  }
});
