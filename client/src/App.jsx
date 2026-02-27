import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import SarthiSystem from './components/SarthiSystem';
import AppPreview from './components/AppPreview';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <SarthiSystem />
      <AppPreview />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
