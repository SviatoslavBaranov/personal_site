import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostData } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import type { Post } from "@/types/blog-types";
import ReactMarkdown from "react-markdown"; 
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (slug) {
      getPostData(slug, lang ?? 'en').then(setPost).catch(console.error);
    }
  }, [slug, lang]);

  if (!post) {
    return <div className="text-center mt-20 text-gray-600">Загрузка...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-1">
      
      <Navbar 
        onCategorySelect={(cat) =>
          navigate(cat ? `/blog?category=${encodeURIComponent(cat)}` : "/blog")
        }
        onSearch={(query) =>
          navigate(`/blog?search=${encodeURIComponent(query)}`)
        }
      />

      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {/* Контент поста */}
        <div className="flex-1 space-y-6">
          <div className="bg-gray-50 p-4 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-1 mt-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
              {post.date.slice(0, 10)} | {post.category}
            </p>
            <p className="prose prose-lg max-w-none text-gray-800 mb-5 mt-10">{post.summary}</p>

            
            <img
              src={
                typeof post.image === 'string'
                  ? post.image
                  : post.image?.id
                  ? `http://localhost:8055/assets/${post.image.id}`
                  : undefined
              }
              alt={post.title}
              className="rounded-xl w-full object-cover max-h-[600px]"
            />

          
            <div className="prose prose-lg max-w-none text-gray-800 mt-10">
              <ReactMarkdown children={post.content} remarkPlugins={[remarkGfm]} />
            </div>
          </div>
        </div>

        {/* Сайдбар */}
        <aside className="w-full md:w-1/4">
          <div className="p-4 rounded-xl bg-gray-100 mb-6">
            <button
              onClick={() => navigate("/blog")}
              className="text-blue-600 hover:underline text-sm"
            >
              ← Назад ко всем постам
            </button>
          </div>
          
          <Sidebar
            onCategorySelect={(category: string) =>
              navigate(category ? `/blog?category=${encodeURIComponent(category)}` : "/blog")
            } 
            onSearch={(query: string) =>
              navigate(`/blog?search=${encodeURIComponent(query)}`)
            }  
          />  
        </aside>
      </div>
    </div>
  );
};

export default BlogPostPage;
