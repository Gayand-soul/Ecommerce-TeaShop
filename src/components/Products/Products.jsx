/* eslint-disable no-unused-vars -- 'motion' is used in JSX */

import React from 'react';
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';
import orangemodernstuem from '@/assets/tea/orangemodernstuem.png';
import { teapotData } from './data';




const Products = () => {
  return (
    <section id="products-section" className="relative min-h-screen bg-cover bg-center bg-no-repeat mt-36" 
        style={{backgroundImage:` url(${orangemodernstuem})`, backgroundSize: 'cover' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className='relative z-10 container pt-12 pb-20'>

            <motion.h1 
            initial={{ opacity:0, x: -200}}
            whileInView={{ opacity:1, x:0}}
            transition={{ duration:1, delay: 0.4}}
            className='text-6xl lg:text-6xl font-bold leading-relaxed  xl:leading-loose font-poppins text-yellow-400 pl-4 mt-12'>
            Time for a Tea Date? <br/>
            Pick Your Flavor!
            </motion.h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pl-4'>
                {teapotData.map((product)=> (
                    <motion.div
                        key={product.id} 
                        variants={FadeLeft(product.delay)}
                        initial="hidden"
                        whileInView={"visible"}
                        whileHover={{scale:1.1}}
                        className="bg-black bg-opacity-50 rounded-3xl px-6 py-6 h-[250px] 
                        shadow-[0_0_22px_0_rgba(255,165,0,1.9)] pl-4 flex items-center gap-4 mt-9">
                        <img src={product.img} alt='tea pots' className='w-[60px] mb-20'/>

                        <div>
                            <h1 className='text-2xl font-bold text-yellow-400 mt-7'>{product.name}</h1>
                            <p className='text-lg font-semibold text-yellow-400'>{product.weight}</p>
                            <p className='text-2xl text-pink-700'>{product.price}  € </p>
                        </div>

                    </motion.div> 
                ))}
            </div>
        </div>
    </section>
    
  );
};


export default Products;