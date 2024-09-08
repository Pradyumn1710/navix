/* eslint-disable no-unused-vars */
import Explanation from '@/my_components/Explanation';
import Hero_Header from '@/my_components/Hero-Header';
import Impact from '@/my_components/Impact';
import Navbar from '@/my_components/Navbar_home';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="min-h-screen bg-gray-100 p-8">
        <Hero_Header />
      </section>
      <section id="what-is-navix" className="min-h-screen bg-gray-100 p-8">
        <Explanation />
      </section>
      <section id="why-navix" className="min-h-screen bg-gray-100 p-8">
        <Impact />
      </section>
    </div>
  );
};

export default HomePage;