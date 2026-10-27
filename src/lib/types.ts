export type Stage='district'|'state'|'national';
export type Question={id:string;prompt:string;choices:string[];answer:number;explanation:string;lessonId:string};
export type EventRecord={id:string;name:string;aliases:string[];subject:string;gradeMin:number;gradeMax:number;teamMin:number;teamMax:number;format:string;season:string;sourceUrl:string;checked:string;knowledgeAreas:string[];weights:{area:string;items:number}[];topicTitle:string|null;stages:Record<Stage,{format:string;summary:string;deadline:string;tools:string[];minutes:number;prepMinutes:number;qaMinutes:number;setupMinutes:number;checklist:string[]}>;notes:string[];moduleIds:string[]};

