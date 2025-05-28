import { createDirectus, rest } from '@directus/sdk';

const BACKEND_URL = "http://localhost:8055/"

const client = createDirectus(BACKEND_URL)
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