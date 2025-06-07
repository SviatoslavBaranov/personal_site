import { createDirectus, rest } from '@directus/sdk';

const client = createDirectus(import.meta.env.VITE_API_URL)
  .with(rest({credentials: 'include'}));

export default client;
  
export type Post = {
  id: string;
  title: string;
  slug: string;
  lang: string;
  date: string;
  category: string;
  content: string;
  image?: string;
  summary: string;
  published: boolean;
  updated_at: string;
};