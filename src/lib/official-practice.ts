import official from '../data/official-practice.json';
export const officialCourseUrl=official.courseUrl;
export const officialPracticeChecked=official.verified;
export const officialPracticeFor=(eventId:string)=>official.tests.find(test=>test.eventId===eventId);
