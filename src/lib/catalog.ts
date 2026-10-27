import eventData from '../data/events.json';
import moduleData from '../data/modules.json';
import sourceData from '../data/sources.json';
import additionalSources from '../data/additional-sources.json';
import type { EventRecord, Question } from './types';
export type StudyModule={id:string;title:string;summary:string;sourceIds:string[];sections:{heading:string;paragraphs:string[];bullets?:string[];example?:{scenario:string;solution:string};table?:{headers:string[];rows:string[][]}}[];terms:{term:string;definition:string}[];questions:Omit<Question,'lessonId'>[]};
export const events=eventData as unknown as EventRecord[];
export const modules=moduleData as StudyModule[];
export const sources=[...sourceData,...additionalSources];
export const moduleById=(id:string)=>modules.find(m=>m.id===id)!;
export const eventModules=(event:EventRecord)=>event.moduleIds.map(moduleById).filter(Boolean);
export const eventQuestions=(event:EventRecord):Question[]=>eventModules(event).flatMap(m=>m.questions.map(q=>({...q,lessonId:m.id})));
export const lessonUrl=(eventId:string,lessonId:string)=>'/events/'+eventId+'/lessons/'+lessonId+'/';
export const readMinutes=(m:StudyModule)=>Math.max(2,Math.ceil(JSON.stringify(m.sections).split(/\s+/).length/200));

