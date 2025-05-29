import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostData } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import type { Post } from "@/types/blog-types";
import { useTranslation } from "react-i18next";
import { buildImageUrl } from "@/lib/blog";
import "./typography.css";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (slug) {
      getPostData(slug, lang ?? 'en').then(setPost).catch(console.error);
    }
  }, [slug, lang]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
        <div className="text-gray-500 text-xl">
          404 — {t('blogPostPage.no_post')}
        </div>
        <button
          onClick={() => navigate('/blog')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {t('sidebar.back_btn')}
        </button>
      </div>
    );
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
              src={buildImageUrl(post.image)}
              alt={post.title}
              className="rounded-xl w-full object-cover max-h-[600px]"
            />

          
            <div
              className="rich-content mt-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
              
            ></div>
          </div>
        </div>

        {/* Сайдбар */}
        <aside className="w-full md:w-1/4">
          <div className="p-4 rounded-xl bg-gray-100 mb-6">
            <button
              onClick={() => navigate("/blog")}
              className="text-blue-600 hover:underline text-sm"
            >
              ←{t('sidebar.back_btn')} 
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

// if user first open a post and after that click to change the lang -> cont. loading 