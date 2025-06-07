import { Routes, Route } from 'react-router-dom';
import React from 'react';
import BlogIndexPage from './pages/blog/BlogIndexPage';
import BlogPostPage from './pages/blog/BlogPostPage'; 
import Home from './pages/Home';
import ModalContainer from '@/components/modals/ModalContainer';
import { Helmet } from 'react-helmet-async';


const App = () => {
  return (
    <>
      <Helmet>
        <title>React разработка под ключ</title>
        <meta name="description" content="Building sites, order, consultation, hire web react developer" />
        <meta property="og:title" content="Max the React Developer" />
        <meta property="og:image" content="/preview.jpg" />
      </Helmet>
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