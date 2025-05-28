
export type Post = {
  id: string;
  title: string;
  slug: string;
  lang: string;
  date: string;
  category: string;
  content: string;
  image?: string | { id: string };
  summary: string;
  published: boolean;
  updated_at: string;
};

export type PostMeta = Pick<Post, 'slug' | 'title' | 'summary' | 'date' | 'image' | 'category' | 'updated_at'>;