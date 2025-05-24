
// src/components/Layout/HomeLayout.jsx

import React from 'react';
import Navbar from '../Navbar/navbar';
import Hero from '../Navbar/Hero/Hero';
import Products from '../Products/Products';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import Cake from '../Cakes/Cake';




const HomeLayout = () => {
  return (
    <main className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Products />
        <Cake />
        <About />
        <Contact />
        <Login />
        <Footer />

    </main>
  );
};

export default HomeLayout;
