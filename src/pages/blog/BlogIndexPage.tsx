import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSortedPostsdata } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import type { Post } from "@/types/blog-types";
import { useTranslation } from "react-i18next";



const BlogIndexPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const category = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchInitialPosts = async () => {
      setIsLoading(true);
      try {
        const { posts: initialPosts, total } = await getSortedPostsdata(1, 5, i18n.language);
        setPosts(
          initialPosts.map((post) => ({
            ...post,
            date: post.date ?? new Date().toISOString(),
          }))
        );
        setTotalPosts(total);
        setPage(1);
      } catch (error) {
        console.error("Ошибка загрузки постов:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialPosts();
  }, [i18n.language]);

  const loadMorePosts = async () => {
    const nextPage = page + 1;
    setIsLoading(true);
    try {
      const { posts: newPosts } = await getSortedPostsdata(nextPage, 5, i18n.language);
      setPosts((prev) => [
        ...prev,
        ...newPosts.map((post) => ({
          ...post,
          date: post.date ?? new Date().toISOString(),
        })),
      ]);
      setPage(nextPage);
    } catch (error) {
      console.error("Ошибка при подгрузке постов:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (cat: string) => {
    const params: Record<string, string> = {};
    if (cat) params.category = cat;
    if (searchQuery) params.search = searchQuery;
    setSearchParams(params);
  };

  const handleSearchChange = (query: string) => {
    const params: Record<string, string> = {};
    if (category) params.category = category;
    if (query) params.search = query;
    setSearchParams(params);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = category ? post.category === category : true;
    const matchesSearch =
      (post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (post.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesCategory && matchesSearch;
  });

  const hasMorePosts = posts.length < totalPosts;
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-1">
      <Navbar
        onCategorySelect={handleCategoryChange}
        onSearch={handleSearchChange}
      />

      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <div className="flex-1 space-y-6">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              summary={post.summary}
              date={post.date}
              updated_at={post.updated_at}
              image={post.image}
              category={post.category}
            />
          ))}
        </div>

        <aside className="w-full md:w-1/4">
          <Sidebar />
        </aside>
      </div>

      {hasMorePosts && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMorePosts}
            disabled={isLoading}
            className="px-6 py-3 text-gray-800 border-2 border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-100 backdrop-blur-md disabled:opacity-50"
          >
            {isLoading ? `${t('blogIndexPage.loading')}` : `${t('blogIndexPage.load_more')}`}
          </button>
        </div>
      )}
    </div>
  );
};



export default BlogIndexPage;