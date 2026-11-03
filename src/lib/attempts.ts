import {supabase} from './supabase';
import {questions} from '../content/course';
export const course='phys1101';
const validIds=new Set(questions.map(q=>q.id));
const recorded=new Set<string>();
const inflight=new Map<string,Promise<void>>();
// Server RLS must enforce auth.uid() = user_id and a unique composite key must
// enforce idempotency. Never send grades or award a point for each retry.
async function recordAttempt(userId:string,questionId:string):Promise<void>{
 if(!supabase||!validIds.has(questionId))return;
 const key=`${userId}:${questionId}`;if(recorded.has(key))return;
 const existing=inflight.get(key);if(existing)return existing;
 const task=(async()=>{
  const {data,error}=await supabase.from('attempts').select('question_id').eq('user_id',userId).eq('course',course).eq('question_id',questionId).limit(1);
  if(error)throw error;
  if(!data?.length){const {error}=await supabase.from('attempts').insert({user_id:userId,course,question_id:questionId});if(error&&error.code!=='23505')throw error;}
  recorded.add(key);
 })();inflight.set(key,task);
 try{await task}finally{inflight.delete(key)}
}
export async function syncAttempts(userId:string,ids:string[]):Promise<void>{
 const unique=[...new Set(ids)].filter(id=>validIds.has(id));
 // Sequential bounded batches; failures remain eligible for subsequent retry.
 for(let i=0;i<unique.length;i+=6){const results=await Promise.allSettled(unique.slice(i,i+6).map(id=>recordAttempt(userId,id)));const failed=results.find(r=>r.status==='rejected');if(failed?.status==='rejected')throw failed.reason;}
}
