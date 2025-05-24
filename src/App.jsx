
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Navbar/Hero/Hero';
import Products from './components/Products/Products';
import About from './components/About/About';
import Shop from './components/Shop/shop';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Layout from './components/Layout/layout';
import ListOfProducts from './pages/ListOfProducts';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import Payment from './components/Shop/payment';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import HomeLayout from './components/Layout/HomeLayout';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Cake from './components/Cakes/Cake';
import Scrollbtn from './components/Scrollbtn/Scrollbtn';

const  App = () => {

  

  return (
    <BrowserRouter>

       {/*To Top-knapp utanför <Routes> */}
      <Scrollbtn />

      <Routes>

         {/* Startsida (Navbar + Products + About) */}
        <Route path="/" element={<HomeLayout />} />
        
        
        {/* Shop-layout */}
         <Route path="/shop" element={<Layout />}>
          <Route index element={<ShopPage />} />
          <Route path=":slug" element={<Detail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />

          {/* Exempel: hem-knapp eller fallback */}
          <Route path="home" element={<Home />} />
          </Route>

          
      </Routes>
    </BrowserRouter>
  );
};

export default App;
