import {test} from 'node:test';
import assert from 'node:assert/strict';
import {emptyProgress,validateProgress,readProgress,writeProgress} from '../src/lib/progress.ts';
const stored=new Map();
globalThis.localStorage={getItem:key=>stored.get(key)??null,setItem:(key,value)=>stored.set(key,value)};
globalThis.window=new EventTarget();
test('progress round-trips without conflating reading and scores',()=>{const p=emptyProgress();p.completed=['accounting/accounting-cycle'];p.attempts=[{eventId:'accounting',score:7,total:10,date:'2026-10-27T14:00:00Z',missed:['accounting-cycle']}];assert.equal(writeProgress(p),'');assert.deepEqual(readProgress().data,p)});
test('backup validation rejects malformed scores and versions',()=>{assert.throws(()=>validateProgress({...emptyProgress(),version:2}));assert.throws(()=>validateProgress({...emptyProgress(),attempts:[{eventId:'a',score:11,total:10,date:'2026-10-27',missed:[]}]}));assert.throws(()=>validateProgress({...emptyProgress(),completed:'everything'}));assert.throws(()=>validateProgress({...emptyProgress(),checklists:{a:'checked'}}))});
test('valid backups deduplicate IDs and keep only the latest 200 attempts',()=>{const p=emptyProgress();p.selected=['accounting','accounting'];p.attempts=Array.from({length:230},()=>({eventId:'a',score:1,total:10,date:'2026-10-27',missed:[]}));const v=validateProgress(p);assert.deepEqual(v.selected,['accounting']);assert.equal(v.attempts.length,200)});
test('storage failure does not block studying and retains this page session in memory',()=>{globalThis.localStorage={getItem(){throw new Error('blocked')},setItem(){throw new Error('blocked')}};const p=emptyProgress();p.bookmarks=['accounting/accounting-cycle'];assert.match(writeProgress(p),/could not save/);assert.deepEqual(readProgress().data.bookmarks,p.bookmarks);assert.match(readProgress().error,/could not be loaded/)});

