import { Routes, Route } from 'react-router-dom';
import React from 'react';
import BlogIndexPage from './pages/blog/BlogIndexPage';
import BlogPostPage from './pages/blog/BlogPostPage'; 
import Home from './pages/Home';
import ModalContainer from '@/components/modals/ModalContainer';

const App = () => {
  return (
    <>
      <ModalContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      
    
    </>
  );
};

export default App;