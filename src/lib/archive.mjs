export const normalizeName = value => value.toLowerCase().replace(/&|_/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim().replace(/\band\b/g, '').replace(/\s+/g, ' ').trim();

const sameTitle = title => title.replace(/^copy of\s+/i, '').replace(/\.(pdf|docx?)$/i, '').replace(/\(\d+\)/g, '').replace(/_/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const fileType = title => /production test/i.test(title) ? 'Production task' : /case/i.test(title) ? 'Case study' : /competenc|tasks?\s*[_&]|task list/i.test(title) ? 'Topic checklist' : /study.?guide|studyguide|ce guide/i.test(title) ? 'Study guide' : /test|quiz/i.test(title) ? 'Practice test' : /topics/i.test(title) ? 'Speaking prompts' : /about this folder/i.test(title) ? 'Collection instructions' : 'Example / reference';

export function buildArchive(inventory, events, relatedFolders) {
  const groups = new Map();
  for (const file of inventory) {
    const key = file.folder + '/' + sameTitle(file.title);
    if (!groups.has(key)) {
      const match = events.find(event => [event.name, ...event.aliases].some(name => normalizeName(name) === normalizeName(file.folder)));
      const links = match ? [{ eventId: match.id, relationship: normalizeName(match.name) === normalizeName(file.folder) ? 'Event match' : 'Former event name', note: normalizeName(match.name) === normalizeName(file.folder) ? 'Filed under this event in the original collection.' : `Filed under ${file.folder}; the event’s scope and format have changed over time.` }] : relatedFolders[file.folder] || [];
      const date = file.title.match(/(?:19|20)\d{2}(?:\s*[-–]\s*\d{2,4})?/);
      groups.set(key, { id: 'archive-' + file.id, title: file.title.replace(/^copy of\s+/i, '').replace(/\.(pdf|docx?)$/i, '').replace(/\(\d+\)/g, '').replace(/_/g, ' ').replace(/\s+/g, ' ').trim(), folder: file.folder, type: fileType(file.title), date: date ? date[0].replace(/\s*[-–]\s*/, '–') : 'Date not stated', audience: /\bPBL\b/i.test(file.title) ? 'Collegiate (PBL)' : 'High school / unspecified', eventLinks: links, files: [] });
    }
    groups.get(key).files.push({ id: file.id, title: file.title, url: file.url, format: /\.pdf$/i.test(file.title) ? 'PDF' : /\.docx$/i.test(file.title) ? 'DOCX' : /\.doc$/i.test(file.title) ? 'DOC' : 'Drive file' });
  }
  return [...groups.values()].map(group => ({ ...group, files: group.files.sort((a, b) => Number(b.format === 'PDF') - Number(a.format === 'PDF') || a.title.localeCompare(b.title)) })).sort((a, b) => a.folder.localeCompare(b.folder) || b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export const forEvent = (groups, eventId) => groups.filter(group => group.audience !== 'Collegiate (PBL)' && group.eventLinks.some(link => link.eventId === eventId));
