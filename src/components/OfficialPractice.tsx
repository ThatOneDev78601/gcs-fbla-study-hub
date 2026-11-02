import {ExternalLink} from 'lucide-react';
import {Button} from './ui/button';
import {officialCourseUrl,officialPracticeFor} from '../lib/official-practice';

export default function OfficialPractice({eventId,eventName}:{eventId:string;eventName:string}){
  const test=officialPracticeFor(eventId);
  return <div className="official-practice">
    <h3>{test?'Official FBLA sample test':'Official FBLA practice resources'}</h3>
    {test?<><p className="section-description">Open {test.title} in FBLA CONNECT.</p>{test.title.startsWith('Introduction to Parliamentary Procedure &')&&<p className="section-description">FBLA provides one shared sample test for Introduction to Parliamentary Procedure and Parliamentary Procedure.</p>}</>:<p className="section-description">A separate {eventName} sample test was not listed in the official course when checked October 31, 2026. Browse the official resources and check your event guide for what to practice.</p>}
    <div className="button-row"><Button asChild><a href={test?.url??officialCourseUrl} target="_blank" rel="noopener noreferrer">{test?'Open official FBLA sample test':'Browse official FBLA tests'} <ExternalLink size={15} aria-label="Opens in a new tab"/></a></Button></div>
    <p className="inline-alert">FBLA CONNECT membership required. Sign in with your own member account. Your test attempts and results stay in CONNECT; they are not saved by this site.</p>
    <p className="section-description">These are practice questions, not the competition test.</p>
    <details className="official-access"><summary>Need help opening the test?</summary><p className="section-description">The test opens on FBLA CONNECT. If signing in takes you to the course menu, come back here and open the test link again. If you still can’t open it, ask your adviser to check your membership and course access.</p><a className="plain-link" href="https://support.fbla.org/hc/en-us/articles/4416902542996-Competition-Prep-Sample-Objective-Tests-Role-Plays-Production-Tests-and-Case-Competitions" target="_blank" rel="noopener noreferrer">FBLA’s access instructions ↗</a></details>
  </div>;
}
