/* eslint-disable no-unused-vars -- 'motion' is used in JSX */

import React from 'react';
import { motion } from 'framer-motion';
import { FadeLeft, FadeUp } from '../../utility/animation';
import { MdShoppingCart } from "react-icons/md";
import ProductCart from '../ProductCart/productCart';
import ListOfProducts from '../../pages/ListOfProducts';





const Shop = () => {
  return (
     <section className='mt-10'>
            

        {/* CARDS MED CEYLONTE BILD, ARTID, PRIS RENDERAS HÄR */}
        <ListOfProducts />
            

    </section>
       
        

    
  );
};

export default Shop;