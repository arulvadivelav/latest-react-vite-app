import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

const HomePage = () => {

  return (
    <div className="homepage">
      <Hero />
      {/* <SearchSection onSearch={handleSearch} /> */}
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default HomePage;