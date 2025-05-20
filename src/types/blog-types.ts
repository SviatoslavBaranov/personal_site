
export interface PostMeta {
    slug: string;
    title: string;
    summary: string;
    date: string;
    category: string;
    lang: string;
    updated?: string;
    image?: string;
  }
  
  
  export interface Post extends PostMeta {
    content: string;
  }
  