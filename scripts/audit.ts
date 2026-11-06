import {topics,cards,questions,constants,questionKinds} from '../src/content/course';
import {validate,blank} from '../src/lib/progress';
import {formulaDetails} from '../src/content/formulaDetails';
import katex from 'katex';

function assert(ok:unknown,msg:string):asserts ok {
  if(!ok) throw Error(msg);
}

assert(topics.length===9,'9 topics');
assert(cards.length===36,'36 cards');
assert(questions.length===108,'108 questions');
for(const list of [topics,cards,questions]) {
  assert(new Set(list.map(x=>x.id)).size===list.length,'Unique IDs');
}

let count=0;
function inline(text:string) {
  assert((text.match(/\$/g)||[]).length%2===0,'Unmatched math delimiter');
  for(const m of text.matchAll(/\$([^$]+)\$/g)) {
    katex.renderToString(m[1],{throwOnError:true});
    count++;
  }
}

for(const topic of topics) {
  assert(topic.ideas.length>=6&&topic.method.length&&topic.mistakes.length,'Complete expanded topic');
  assert(questions.filter(q=>q.topic===topic.id).length===12,'12 questions per topic');
  for(let n=1;n<=12;n++) {
    assert(questions.some(q=>q.id===`${topic.id}-q${n}`),'Stable question IDs');
  }
  for(const text of [...topic.ideas,...topic.method,topic.example,...topic.mistakes,...topic.recall.flat()]) {
    inline(text);
  }
  for(const [label,formula,condition] of topic.formulas) {
    assert(label&&condition,'Formula context');
    katex.renderToString(formula,{throwOnError:true});
    count++;
    inline(condition);
    const detail=formulaDetails[label];
    assert(detail&&detail.meaning&&detail.when&&detail.variables.length,'Every formula has definitions');
    inline(detail.meaning);
    inline(detail.when);
    for(const variable of detail.variables) {
      assert(variable.meaning&&variable.unit,'Variable meaning and unit');
      inline('$'+variable.symbol+'$');
    }
    assert(detail.example.steps.length>=2&&detail.example.check,'Worked example steps and check');
    for(const text of [detail.example.prompt,...detail.example.steps,detail.example.check]) inline(text);
  }
}
assert(Object.keys(formulaDetails).length===38,'38 enriched formula groups');
const kinds=new Set(questions.map(q=>q.kind));
assert(kinds.size===6&&!kinds.has(undefined),'Six question types');
for(const question of questions) {
  assert(question.prompt.length>40&&question.solution.length>30,'Substantive prompt and explanation');
  assert(question.kind&&questionKinds.includes(question.kind),'Supported question type');
  assert(topics.some(t=>t.id===question.topic),'Valid question topic');
  inline(question.prompt);
  inline(question.solution);
}
for(const [,formula] of constants) {
  katex.renderToString(formula,{throwOnError:true});
  count++;
}
validate(blank());
for(const bad of [null,{}, {...blank(),version:2},{...blank(),cards:{a:'bad'}},{...blank(),positions:{a:-1}},{...blank(),practice:[]}]) {
  let failed=false;
  try { validate(bad); } catch { failed=true; }
  assert(failed,'Reject invalid backup');
}
console.log(`PASS: ${topics.length} topics, ${cards.length} cards, ${questions.length} questions; ${count} math expressions; backup validation.`);
