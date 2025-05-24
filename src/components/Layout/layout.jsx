
import React from 'react';
import { Outlet } from 'react-router-dom';
import CartTab from '../CartTab/CartTab';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';


const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className='bg-yellow-400 min-h-screen flex flex-col'>

      <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-48"}`}> {/*.-translate-x-56 ger så att hela tebilder flyttas till vänster.*/}
        <Header/>
        <Outlet/>
       
      </main>

      <CartTab/>
    </div>
  )
}

export default Layout;