import Hero from '../components/hero';
import Slider from '../components/slider';
import Header from '../components/header';
import Footer from '../components/footer';
import FreelanceSection from '../components/FreelanceSection';
import About from '../components/about';
import React from 'react';

const Home = () => {
  return (
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory'>
      <Header />
      <section id="home" className='h-screen snap-start bg-gray-100'>
        <Hero />
      </section>
      
      <FreelanceSection />
      <About />
      <section id="portfolio" className='h-screen snap-start '>
        <Slider />
      </section>
      <footer className='h-screen snap-start'>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
