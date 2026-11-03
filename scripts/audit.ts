import {topics,cards,questions,constants} from '../src/content/course';
import {validate,blank} from '../src/lib/progress';
import katex from 'katex';
function assert(ok:unknown,msg:string):asserts ok{if(!ok)throw Error(msg)}
assert(topics.length===9,'9 topics');assert(cards.length===36,'36 cards');assert(questions.length===18,'18 questions');
for(const list of [topics,cards,questions])assert(new Set(list.map(x=>x.id)).size===list.length,'Unique IDs');
let count=0;function inline(s:string){assert((s.match(/\$/g)||[]).length%2===0,'Unmatched math delimiter');for(const m of s.matchAll(/\$([^$]+)\$/g)){katex.renderToString(m[1],{throwOnError:true});count++}}
for(const t of topics){assert(t.ideas.length&&t.method.length&&t.mistakes.length,'Complete topic');for(const s of [...t.ideas,...t.method,t.example,...t.mistakes,...t.recall.flat()])inline(s);for(const [label,f,c]of t.formulas){assert(label&&c,'Formula context');katex.renderToString(f,{throwOnError:true});count++;inline(c)}}
for(const q of questions){assert(topics.some(t=>t.id===q.topic),'Valid question topic');inline(q.prompt);inline(q.solution)}
for(const [,f]of constants){katex.renderToString(f,{throwOnError:true});count++}
validate(blank());
for(const bad of [null,{}, {...blank(),version:2},{...blank(),cards:{a:'bad'}},{...blank(),positions:{a:-1}},{...blank(),practice:[]}]){let failed=false;try{validate(bad)}catch{failed=true}assert(failed,'Reject invalid backup')}
console.log(`PASS: ${topics.length} topics, ${cards.length} cards, ${questions.length} questions; ${count} math expressions; backup validation.`);
