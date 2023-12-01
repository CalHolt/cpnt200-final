import { supabase } from "$lib/supabaseClient";
let { data: blog, error } = await supabase
  .from('blog')
  .select("*")