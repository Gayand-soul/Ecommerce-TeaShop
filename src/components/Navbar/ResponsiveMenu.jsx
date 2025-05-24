/* eslint-disable no-unused-vars -- 'motion' is used in JSX */

import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from 'framer-motion';

// Menyobjekt
const menuItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/#products-section" },
  { id: 3, title: "About", link: "/#about-section" },
  { id: 4, title: "Shop", link: "/shop" },
  { id: 5, title: "Contact", link: "/#contact-section" },
  { id: 6, title: "Login", link: "/#login-section" },
];

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          onClick={() => setOpen(false)} // Stänger menyn vid klick utanför
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              {menuItems.map((item) => (
                <li key={item.id} onClick={() => setOpen(false)}>
                  {item.link.includes("#") ? (
                    <HashLink
                      smooth
                      to={item.link}
                      className="hover:text-yellow-300 transition duration-200"
                    >
                      {item.title}
                    </HashLink>
                  ) : (
                    <NavLink
                      to={item.link}
                      className="hover:text-yellow-300 transition duration-200"
                    >
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
