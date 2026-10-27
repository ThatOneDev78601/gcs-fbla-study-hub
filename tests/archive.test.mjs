import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildArchive,forEvent} from '../src/lib/archive.mjs';
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const inventory=read('research/historical-resource-inventory.json'),events=read('src/data/events.json');
const groups=buildArchive(inventory,events,read('research/archive-related-topics.json'));

test('every original Drive file remains accessible exactly once, with valid event links',()=>{
  const files=groups.flatMap(group=>group.files);
  assert.equal(files.length,274);
  assert.equal(new Set(files.map(file=>file.id)).size,274);
  assert.equal(new Set(groups.map(group=>group.id)).size,groups.length);
  for(const original of inventory)assert(files.some(file=>file.id===original.id&&file.url===original.url));
  for(const group of groups)for(const link of group.eventLinks)assert(events.some(event=>event.id===link.eventId),link.eventId);
});

test('former names and related retired events are distinguished, while collegiate files stay out of high-school event lists',()=>{
  assert(forEvent(groups,'accounting').some(group=>group.folder==='Accounting I'&&group.eventLinks[0].relationship==='Former event name'));
  const office=forEvent(groups,'computer-applications');
  assert(office.some(group=>group.folder==='Spreadsheet Applications'&&group.eventLinks[0].relationship==='Related skill practice'));
  assert(office.some(group=>group.folder==='Word Processing'));
  assert(forEvent(groups,'customer-service').some(group=>group.folder==='Client Service'));
  assert(groups.some(group=>group.audience==='Collegiate (PBL)'));
  for(const event of events)assert(forEvent(groups,event.id).every(group=>group.audience!=='Collegiate (PBL)'));
});

test('same-title formats group without losing different years or final/preliminary cases',()=>{
  assert(groups.some(group=>group.files.length>1&&new Set(group.files.map(file=>file.format)).size>1));
  assert(forEvent(groups,'marketing').some(group=>group.date==='2007–10'));
  assert(forEvent(groups,'marketing').some(group=>group.date==='2013–16'));
  assert(forEvent(groups,'customer-service').some(group=>/Final/i.test(group.title)));
  assert(forEvent(groups,'customer-service').some(group=>/Prel/i.test(group.title)));
});

test('current MBA guide links map to 43 distinct current high-school events',()=>{
  const guides=read('src/data/current-guides.json');
  assert.equal(guides.length,43);assert.equal(new Set(guides.map(guide=>guide.eventId)).size,43);
  for(const guide of guides){assert(events.some(event=>event.id===guide.eventId));assert.equal(new URL(guide.url).hostname,'www.mbaresearch.org');assert(guide.url.endsWith('.pdf'));}
  assert(guides.find(guide=>guide.eventId==='organizational-leadership').note.includes('2025'));
});
