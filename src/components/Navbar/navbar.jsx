/* eslint-disable no-unused-vars -- 'motion' is used in JSX */

import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { TbLeaf} from 'react-icons/tb';
import { MdShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LoginPopup from '../LoginPopup/LoginPopup';


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link:"/",
  },
  {
    id: 2,
    title: "Products",
    link:"/#products-section",
  },
  {
    id: 3,
    title: "About",
    link:"/#about-section",
  },
  {
    id: 4,
    title: "Shop",
    link:"/shop",
  },
  {
    id: 5,
    title: "Cake",
    link:"/#cake-section",
  },
  {
    id: 6,
    title: "Contacts",
    link:"/#contact-section",
  },
  {
    id: 7,
    title: "Login",
    link:"/#login-section",
  },

];

const Navbar = ({toggleLoginPopup}) => {
  const [open, setOpen] =  React.useState(false);

  return (
    <nav>
        <motion.div 
          initial= {{ opacity:0}}
          animate= {{ opacity:1}}
          transition = {{ duration:0.5, delay:0.9}}
          className='container flex justify-between items-center py-4 md:pt-4'>

            {/*.Logo section.*/}
            <div className='text-3xl flex items-center gap-2 font-bold uppercase pl-4'>
                <p className="text-3xl font-bold text-green-700">Tea</p>
                <TbLeaf className='text-green-950 text-4xl'/>
                <p className=" text-green-700 font-bold text-3xl">Shop</p>
            </div>

            {/*.Menu section.*/}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-2 text-green-900 text-2xl'>
                {NavbarMenu.map((menu) => (
                  <li key={`nav-${menu.id}`}>
                    {menu.link.includes('#') ? (
                      <HashLink
                        smooth
                        to={menu.link}
                        className='inline-block py-1 px-5 hover:text-yellow-600 border-b-2 border-transparent hover:border-primary transition-all duration-700 ease-in-out font-semibold'
                      >
                         {menu.title}
                      </HashLink>): (<NavLink to={menu.link}
                     className='inline-block py-1 px-5 hover:text-yellow-600 border-b-2 border-transparent
                      hover:border-primary transition-all duration-700 ease-in-out font-semibold'
                    >{menu.title}</NavLink>)}
                    
                  </li>
                ))}

                {/*.Login Menu Popup section.*/}
                <div className='md:hidden'>
                  <button onClick={toggleLoginPopup}
                  className='text-xl font-semibold text-green-800 py-4 px-4'>Login</button>
                </div>

                 {/*.View Cart.*/}
                 <button className='text-4xl hover:bg-primary hover:text-white rounded-full p-3 duration-200'>
                 <MdShoppingCart />
                 </button>
              </ul>
            </div>

            {/*.Mobile Hamburger Menu section.*/}
            <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl'/>
            </div>
            
        </motion.div>
        {/*.Responsive menu, visible only on mobile*/}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </nav>
    
  );
};

export default Navbar;