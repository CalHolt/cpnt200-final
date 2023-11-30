import { supabase } from "$lib/supabaseClient";

// Select table in load function by calling table
export async function load() {
  const { data } = await supabase.from("blog").select();
  // return the table and data
  return {
    blog: data ?? [],
  };
}