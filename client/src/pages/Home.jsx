import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import SarthiSystem from '../components/SarthiSystem';
import AppPreview from '../components/AppPreview';
import Pricing from '../components/Pricing';

const Home = () => {
    return (
        <>
            <Hero />
            <Problem />
            <SarthiSystem />
            <AppPreview />
            <Pricing />
        </>
    );
};

export default Home;
