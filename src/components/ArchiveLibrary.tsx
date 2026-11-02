import {useState} from 'react';
import {Search,ArrowUpRight} from 'lucide-react';
import type {ArchiveGroup} from '../lib/catalog';
type EventOption={id:string;name:string};

export function ArchiveEntries({groups,events,eventId=''}:{groups:ArchiveGroup[];events:EventOption[];eventId?:string}){
  return <div className="archive-list">{groups.map(group=>{
    const primary=group.files[0];
    const match=group.eventLinks.find(link=>link.eventId===eventId);
    return <article className="archive-entry" key={group.id}>
      <div className="resource-meta"><span className="badge badge-amber">Historical</span><span>{group.date}</span><span>· {group.type}</span>{group.audience==='Collegiate (PBL)'&&<span>· Collegiate (PBL)</span>}</div>
      <h3><a href={primary.url} target="_blank" rel="noreferrer" title={primary.title}>{group.title} <ArrowUpRight aria-hidden="true" size={14}/></a> <span className="small muted">{primary.format}</span></h3>
      {match&&<p className="archive-context"><strong>{match.relationship}.</strong> {match.note}</p>}
      {!eventId&&<p className="archive-context">{group.eventLinks.length?group.eventLinks.map((link,i)=><span key={link.eventId}>{i>0?' · ':''}<a href={'/events/'+link.eventId+'/resources/'}>{events.find(event=>event.id===link.eventId)?.name}</a>{link.relationship==='Related skill practice'?' (related skills)':''}</span>):'No confirmed match to a current event'}</p>}
      <p className="archive-folder">Original folder: {group.folder}</p>
      {group.files.length>1&&<details className="archive-copies"><summary>{group.files.length-1} other {group.files.length===2?'file':'files'} with this title</summary><ul>{group.files.slice(1).map(file=><li key={file.id}><a href={file.url} target="_blank" rel="noreferrer">{file.title} <span className="muted">({file.format})</span></a></li>)}</ul><p>Grouped by filename; their contents may differ.</p></details>}
    </article>;
  })}</div>;
}

export default function ArchiveLibrary({groups,events}:{groups:ArchiveGroup[];events:EventOption[]}){
  const [query,setQuery]=useState(''),[eventId,setEventId]=useState(''),[kind,setKind]=useState('');
  const types=[...new Set(groups.map(group=>group.type))].sort();
  const result=groups.filter(group=>(!eventId||(eventId==='general'?!group.eventLinks.length:group.audience!=='Collegiate (PBL)'&&group.eventLinks.some(link=>link.eventId===eventId)))&&(!kind||group.type===kind)&&[group.title,group.folder,...group.files.map(file=>file.title),...group.eventLinks.flatMap(link=>[events.find(event=>event.id===link.eventId)?.name,link.relationship])].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
  const reset=()=>{setQuery('');setEventId('');setKind('')};
  return <section aria-label="Browse historical Drive material">
    <div className="search-bar"><Search size={18} aria-hidden="true"/><input aria-label="Search archive files" placeholder="Search a topic, event, or filename…" value={query} onChange={event=>setQuery(event.target.value)}/></div>
    <div className="archive-filters"><label>Competition<select value={eventId} onChange={event=>setEventId(event.target.value)}><option value="">All events and general materials</option><option value="general">No confirmed event match</option>{events.map(event=><option value={event.id} key={event.id}>{event.name}</option>)}</select></label><label>Material type<select value={kind} onChange={event=>setKind(event.target.value)}><option value="">All material types</option>{types.map(type=><option key={type}>{type}</option>)}</select></label><button className="button button-outline" onClick={reset}>Clear filters</button></div>
    <p className="directory-note" aria-live="polite">{result.length} entries · {result.reduce((n,group)=>n+group.files.length,0)} original files · Files with the same title are grouped</p>
    {!result.length&&<div className="empty"><h2>No matching archive files</h2><p>The original collection does not cover every current competition. Current sources are available on every event’s materials page.</p>{eventId&&eventId!=='general'&&<a className="plain-link" href={'/events/'+eventId+'/resources/'}>Open current study sources →</a>}<p><button className="button button-outline" onClick={reset}>Show all archive material</button></p></div>}
    <ArchiveEntries groups={result} events={events} eventId={eventId==='general'?'':eventId}/>
  </section>;
}
