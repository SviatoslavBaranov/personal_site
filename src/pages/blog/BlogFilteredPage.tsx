import React from "react";
import { useSearchParams } from "react-router-dom";
import BlogIndexPage from "./BlogIndexPage";

const BlogFilteredPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <BlogIndexPage key={`filtered-${category}`} />
  );
};

export default BlogFilteredPage;
