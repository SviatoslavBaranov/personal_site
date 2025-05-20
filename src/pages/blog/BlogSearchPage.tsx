import { useSearchParams } from "react-router-dom";
import BlogIndexPage from "./BlogIndexPage";

const BlogSearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  return (
    <BlogIndexPage key={`search-${searchQuery}`} />
  );
};

export default BlogSearchPage;
