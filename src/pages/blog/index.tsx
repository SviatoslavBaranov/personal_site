import { useEffect, useState } from "react";
import { getSortedPostsdata } from "@/lib/blog";
import { Link } from 'react-router-dom';
import type { PostMeta } from '@/types/blog-types';

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    getSortedPostsdata()
    .then((data) => setPosts(data.posts))
    .catch(console.error);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Блог</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">
              {post.date} {post.updated ? `(обновлено: ${post.updated})` : ''}
            </p>
            <p className="mt-2 text-gray-700">{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}