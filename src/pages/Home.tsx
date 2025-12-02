import React from 'react';
import HeroSysdak from '../components/sections/HeroSysdak';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <HeroSysdak />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;