import {createClient} from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL || 'https://dumwemqyukzzlwjslkss.supabase.co';
const key=import.meta.env.VITE_SUPABASE_ANON_KEY;
// Each site keeps its own session but authenticates the same real email account.
export const supabase=key?createClient(url,key,{auth:{flowType:'pkce',detectSessionInUrl:false,persistSession:true,autoRefreshToken:true}}):null;
export function siteRedirectUrl(){return new URL(import.meta.env.BASE_URL,location.origin).href;}
let callback:Promise<void>|undefined;
export function finishAuthCallback():Promise<void>{
 return callback??=(async()=>{
  const params=new URLSearchParams(location.search);
  if(params.has('error_description'))throw Error(params.get('error_description')!);
  const code=params.get('code');if(!code||!supabase)return;
  const {error}=await supabase.auth.exchangeCodeForSession(code);if(error)throw error;
  const url=new URL(location.href);url.searchParams.delete('code');url.hash='/';history.replaceState(null,'',url);
 })();
}
