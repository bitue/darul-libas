import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import SectionOne from '../components/SectionOne/SectionOne';
import SectionTwo from '../components/SectionTwo/SectionTwo';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;
