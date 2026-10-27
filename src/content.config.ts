import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';
const events=defineCollection({loader:file('src/data/events.json'),schema:z.looseObject({id:z.string(),name:z.string(),aliases:z.array(z.string()),subject:z.string(),gradeMin:z.number(),gradeMax:z.number(),teamMin:z.number(),teamMax:z.number(),format:z.enum(['Test','Submission','Presentation','State only']),season:z.string(),sourceUrl:z.url(),checked:z.string(),knowledgeAreas:z.array(z.string()),moduleIds:z.array(z.string()),notes:z.array(z.string())})});
const lessons=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/lessons'}),schema:z.object({title:z.string(),summary:z.string(),sourceIds:z.array(z.string()),reviewed:z.string()})});
export const collections={events,lessons};

