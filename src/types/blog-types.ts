
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