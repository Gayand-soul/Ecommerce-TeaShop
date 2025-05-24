/* eslint-disable no-unused-vars -- 'motion' is used in JSX */


import React from 'react';
import blacktea from '../../../assets/tea/blacktea.jpg';
import teblad from '../../../assets/tea/teblad.jpg';
import {motion} from 'framer-motion';
import { FadeRight } from '../../../utility/animation';
import { Link } from 'react-scroll';


const Hero = () => {
  return (

    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
            {/*.Tea Welcome Info..=(Brandinfo)*/}
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                <div className='text-center md:text-left space-y-6 lg:max-w-[400px] pl-4'>
                    <h1 className='text-6xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-poppins text-yellow-500'>Ceylon Tea!</h1>
                    <br/>
                    <motion.h1 
                    variants={FadeRight(0.6)}
                    initial="hidden"
                    animate="visible"
                    className='text-3xl lg:text-4xl font-bold leading-relaxed xl:leading-loose font-poppins text-green-700'>
                      Exceptional Flavor, Aroma, And <span className='text-secondary'>Freshness!</span>
                    </motion.h1>

                    <motion.p 
                     variants={FadeRight(0.9)}
                     initial="hidden"
                     animate="visible"
                    className='text-2xl tracking-wide'>What tea is considered ‘Best Ceylon Tea’?
                    </motion.p>

                    <motion.p 
                     variants={FadeRight(1.2)}
                     initial="hidden"
                     animate="visible"
                    className='text-gray-700'><span className='text-yellow-600 font-semibold'>"Best Ceylon Tea"</span> refers to the highest grade teas harvested from Sri Lanka's prestigious mountainous regions, particularly the emerald slopes of Nuwara Eliya—often called the <span className='text-yellow-600 font-semibold'>"Champagne of Ceylon Teas."</span> These exceptional leaves are distinguished by their golden-tipped appearance, meticulously handpicked at dawn when essential oils reach peak concentration.
                    </motion.p>

                   {/*.Button section..*/}
                   <motion.div 
                    variants={FadeRight(1.6)}
                    initial="hidden"
                    animate="visible"
                    className='flex justify-center md:justify-start'>
                    <Link to="about-section" smooth = {true} duration={500} offset={-70}> {/*.// -70 = justera efter höjden på navbaren.*/}
                    <button className='primary-btn'>Explore More</button>
                    </Link>
                   </motion.div>
                </div>
            </div>

            {/*.Hero Images..*/}
            <div className='flex justify-center items-center'>
              <motion.img 
              initial= {{ opacity:0, x:200, rotate:75}}
              animate= {{ opacity:1, x:0, rotate:0}}
              transition = {{ duration:1, delay:0.2}}
          
              src={blacktea} alt="tea cup with tea and tea leavs" className='w-[300px]
              md:w-[550px] border-none '  />
            </div>

            {/*.Leave Images..*/}
            <div className='absolute top-20 md:top-0 right-1/2
              blur-0 opacity-70 rotate-[40deg]'>
              <motion.img 
              initial= {{ opacity:0, x:-200, rotate:75}}
              animate= {{ opacity:1, x:0, rotate:0}}
              transition = {{ duration:1, delay:1.5}}
              src={teblad} alt="tea leaves" className='w-full md:mas-w-[300px]'/>
            </div>

        </div>
    </section>
  );
};

export default Hero;