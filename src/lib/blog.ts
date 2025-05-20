import { createClient } from "@supabase/supabase-js";
import type {  Post } from "@/types/blog-types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);

export async function getAllPostsSlugs() {
    const { data, error} = await supabase
    .from('posts')
    .select('slug');

    if (error) throw error;

    return (data ?? []).map((post) => ({ params: { slug: post.slug } }));
}

export async function getSortedPostsdata(page = 1, pageSize = 5): Promise<{ posts: Post[]; total: number}> {
    const { data, error, count } = await supabase
    .from('posts')
    .select('slug, title, date, category, content, summary, lang, updated, image', {count: 'exact'})
    .order('date', {ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);

    if (error) throw error;

    return {
      posts: data ?? [],
      total: count ?? 0,
    };
    
}

export async function getPostData(slug: string): Promise<Post | null> {
    const { data, error } = await supabase
      .from('posts')
      .select('slug, title, content, date, category, summary, lang, updated, image')
      .eq('slug', slug)
      .single();
  
    if (error) {
      console.error("Ошибка при загрузке поста:", error.message);
      return null;
    }
  
    return data;
  }
  

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();
  
    if (error) {
      console.log("ОШибка при загрузке по слагу:", error.message);
      return null;
    }
    return data;
  }