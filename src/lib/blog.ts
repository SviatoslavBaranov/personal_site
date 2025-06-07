import  directus  from './directus';
import type { Post } from '@/types/blog-types';
import { readItems } from '@directus/sdk';

const postFields = [
  'id',
  'title',
  'slug',
  'lang',
  'date',
  'category',
  'content',
  'image',
  'summary',
  'updated_at',
  'published',
];
const BASE_URL = import.meta.env.VITE_API_URL;

export const buildImageUrl = (image?: string | { id: string }): string | undefined => {
  if (typeof image === 'string') return `${BASE_URL}/assets/${image}`;
  if (typeof image === 'object' && image?.id) return `${BASE_URL}/assets/${image.id}`;
  return undefined;
};

export async function getSortedPostsdata(
  page: number,
  limit: number,
  language: string,
  category?: string,
  searchQuery?: string
): Promise<{ posts: Post[]; total: number }> {
  const offset = (page - 1) * limit;

  const response = await directus.request(
    readItems('posts', {
      filter: {
        lang: { _eq: language },
        published: { _eq: true },
        ...(category ? { category: { _eq: category } } : {}),
        ...(searchQuery
          ? {
              _or: [
                { title: { _contains: searchQuery } },
                { summary: { _contains: searchQuery } }
              ],
            }
          : {}),
      },
      sort: ['-date'],
      limit,
      offset,
      fields: postFields,
    })
  );

  const posts = response as Post[];

  const normalizedPosts = posts.map((post) => ({
    ...post,
    image: buildImageUrl(typeof post.image === 'string' ? post.image : post.image?.id),
  }));

  return {
    posts: normalizedPosts,
    total: posts.length // optionally replace this with a total count query if pagination UI needs it
  };
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await directus.request(
    readItems('posts', {
      filter: {
        slug: { _eq: slug },
        published: { _eq: true },
      },
      limit: 1,
      fields: postFields,
    })
  );

  const posts = response as Post[];

  return posts.length > 0 ? posts[0] : null;
}

export async function getPostData(slug: string, language: string): Promise<Post | null> {
  const response = await directus.request(
    readItems('posts', {
      filter: {
        slug: { _eq: slug },
        lang: { _eq: language },
        published: { _eq: true },
      },
      limit: 1,
      fields: postFields,
    })
  );

  const posts = response as Post[];
  return posts.length > 0 ? posts[0] : null;
}