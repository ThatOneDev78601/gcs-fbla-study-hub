export type Attempt={eventId:string;score:number;total:number;date:string;missed:string[]};
export type Progress={version:1;selected:string[];bookmarks:string[];completed:string[];lastLesson:string|null;attempts:Attempt[];checklists:Record<string,string[]>};
export const emptyProgress=():Progress=>({version:1,selected:[],bookmarks:[],completed:[],lastLesson:null,attempts:[],checklists:{}});
const KEY='gcs-fbla-progress-v1';
let memoryProgress=emptyProgress();
export function validateProgress(value:unknown):Progress {
 if(!value||typeof value!=='object')throw new Error('This is not a study-progress backup.');
 const v=value as Record<string,unknown>;
 const strings=(x:unknown):x is string[]=>Array.isArray(x)&&x.every(y=>typeof y==='string'&&y.length<200);
 if(v.version!==1||!strings(v.selected)||!strings(v.bookmarks)||!strings(v.completed)||!(v.lastLesson===null||typeof v.lastLesson==='string')||!Array.isArray(v.attempts)||!v.checklists||typeof v.checklists!=='object'||Array.isArray(v.checklists))throw new Error('The backup format is invalid or from an unsupported version.');
 if(!Object.entries(v.checklists).every(([k,a])=>k.length<250&&strings(a)))throw new Error('The backup has invalid checklists.');
 if(!v.attempts.every((a:any)=>a&&typeof a.eventId==='string'&&Number.isInteger(a.score)&&Number.isInteger(a.total)&&a.total>0&&a.score>=0&&a.score<=a.total&&typeof a.date==='string'&&Number.isFinite(Date.parse(a.date))&&strings(a.missed)))throw new Error('The backup has invalid practice results.');
 return {version:1,selected:[...new Set(v.selected)],bookmarks:[...new Set(v.bookmarks)],completed:[...new Set(v.completed)],lastLesson:v.lastLesson as string|null,attempts:v.attempts.slice(-200) as Attempt[],checklists:Object.fromEntries(Object.entries(v.checklists)) as Record<string,string[]>};
}
export function readProgress():{data:Progress;error:string} { try { const raw=localStorage.getItem(KEY);return {data:raw?validateProgress(JSON.parse(raw)):memoryProgress,error:''}; } catch { return {data:memoryProgress,error:'Progress could not be loaded. Reading and practice still work; enable browser storage to save your work.'}; } }
export function writeProgress(data:Progress):string {memoryProgress=validateProgress(data);try{localStorage.setItem(KEY,JSON.stringify(memoryProgress));window.dispatchEvent(new Event('study-progress'));return '';}catch{return 'Your browser could not save progress. It is available during this page visit; export a backup before leaving.';} }

