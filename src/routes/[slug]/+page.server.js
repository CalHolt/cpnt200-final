import { supabase } from "$lib/supabaseClient";
  export async function load({ params }) {
    let response = await supabase
    .from('blog')
    .select("*")
    .eq('slug', params.slug)
    console.log(response.data[0].blog_title)
    return {
      title: response.data[0].blog_title,
      content: response.data[0].blog_content,
      author: response.data[0].blog_author,
    };
  }
