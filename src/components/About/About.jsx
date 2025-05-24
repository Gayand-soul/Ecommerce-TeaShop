/* eslint-disable no-unused-vars -- 'motion' is used in JSX */

import React from 'react';
import koloniroom from '@/assets/tea/koloniroom.jpg';
import { motion } from 'framer-motion';
import { FadeLeft, FadeUp } from '../../utility/animation';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import Pinteresttearoom from '../../assets/images/Pinteresttearoom.JPG';
import plantage1 from '../../assets/images/plantage1.jpg';
import plantage2 from '../../assets/images/plantage2.jpg';
import teagarden1 from '../../assets/images/teagarden1.jpg';
import TeaWithCakes from '../../assets/images/TeaWithCakes.JPG';
import traintea from '../../assets/images/traintea.jpg';
import Orangetearoom from '../../assets/images/Orangetearoom.JPG';


const About = () => {

  const navigate = useNavigate(); //behöves=btn skall nå /shop

  return (
    <section id='about-section' className='mt-20'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            
            {/*.About- IMAGE. with an antique couch first and other images after .*/}
            <div className='flex flex-col items-center gap-3'>
                
                    <motion.img 
                    variants={FadeUp(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    src={koloniroom} alt='tea room'
                    className='w-[300px] md:max-w-[300px] h-[500px] mt-20 
                        border-4 border-[#FFD700] p-3 object-cover drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'/>

                    <motion.img 
                    variants={FadeUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    src = {plantage1} alt='tea room'className='w-[300px] md:max-w-[300px] h-[500px]
                        border-4 border-[#FFD700] p-3 object-cover drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'/>
                    

                    <motion.img 
                    variants={FadeUp(0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    src = {plantage2} alt='tea room'className='w-[300px] md:max-w-[300px] h-[500px]
                        border-4 border-[#FFD700] p-3 object-cover drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'/>
                    

                    <motion.img 
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    src = {Pinteresttearoom} alt='tea room'className='w-[300px] md:max-w-[300px] h-[500px]
                        border-4 border-[#FFD700] p-3 object-cover drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'/>
                    

                    <motion.img 
                    variants={FadeUp(0.6)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    src = {traintea} alt='tea room'className='w-[300px] md:max-w-[300px] h-[500px]
                        border-4 border-[#FFD700] p-3 object-cover drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'/>

                    <motion.img 
                    variants={FadeUp(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    src = {Orangetearoom} alt='tea room'className='w-[300px] md:max-w-[300px] h-[500px]
                        border-4 border-[#FFD700] p-3 object-cover drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'/>

                    <motion.img 
                    variants={FadeUp(0.8)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    src = {TeaWithCakes} alt='tea room'className='w-[300px] md:max-w-[300px] h-[500px]
                        border-4 border-[#FFD700] p-3 object-cover drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'/>
                        
            </div>

            {/*.About info..*/}
            <div className='flex flex-col  justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1 
                    variants={FadeUp(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className='text-3xl lg:text-6xl font-bold text-green-700 '>Mountains, Monsoons, and Magic: The Perfect Storm That Creates Ceylon's Legendary Teas</motion.h1><br/>
                    <motion.p
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    >Ceylon tea is the best tea in the world, offering an unmatched combination of bright flavor, aromatic complexity, and 
                    refreshing character that has earned it a prestigious place among tea connoisseurs globally.  <br/>
                    <span className='text-yellow-600 font-semibold'>Ceylon tea is known for its crisp, citrusy flavor profile with bright notes that create a refreshing cup.</span> 
                     The unique climate and geography of Sri Lanka provide ideal growing conditions - varying elevations (low, mid, and high) 
                    each produce distinctive characteristics in the tea leaves.<br/>
                    The country's colonial history established strong quality control standards and specialized manufacturing 
                    techniques that continue today. Ceylon teas offer remarkable versatility, producing excellent black teas, but also green, 
                    white, and oolong varieties. <br/> <br/>

                    Many tea enthusiasts appreciate <span className='text-yellow-500 font-semibold'>Ceylon tea's clean taste, moderate astringency, and golden-amber color</span> when brewed. 
                    The different growing regions (Nuwara Eliya, Dimbula, Uva, Kandy) each contribute signature characteristics to their teas.
                    That said, "best tea" is highly personal - some might prefer Chinese, Japanese, Indian or other varieties depending on their 
                    taste preferences. Ceylon tea's worldwide reputation stems from its consistent quality and distinctive flavor profile rather 
                    than any objective claim to superiority.
                    </motion.p><br/>

                    <motion.h2
                    variants={FadeUp(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className='text-1xl lg:text-3xl font-bold text-green-900'
                    >Silver Tips and Golden Leaves: Ceylon's Supreme Tea Grade
                    </motion.h2>

                    <motion.p
                    variants={FadeUp(0.9)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    >Ceylon tea is graded using a complex system that primarily reflects the size and appearance of the tea 
                    leaves rather than their quality or flavor. However, among connoisseurs, Silver Tips or Golden Tips are widely 
                    considered the most prestigious grades of Ceylon tea.<br/>
                    Highly regarded Ceylon tea grades include: <span className='text-green-500 font-semibold'>Orange Pekoe (OP):</span> Whole leaf tea with no tips, 
                    <span className='text-green-600 font-semibold'>Flowery Orange Pekoe (FOP):</span> Whole leaf with some tips, <span className='text-green-700 font-semibold'>Golden Flowery Orange Pekoe (GFOP):</span> Higher proportion of golden tips, 
                    <span className='text-green-800 font-semibold'>Tippy Golden Flowery Orange Pekoe (TGFOP):</span>Even more golden tips.
                    </motion.p><br/>

                    <motion.h2
                     variants={FadeUp(1.0)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true}}
                    className='text-1xl lg:text-3xl font-bold text-green-900'
                    >From Leaf to Cup: The Alchemical Journey of Tea Transformation
                    </motion.h2>

                    <motion.p
                     variants={FadeUp(1.2)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true}}
                    >Tea production is a meticulous process that transforms <span className='text-red-800 font-semibold'>camellia sinensis </span> leaves 
                    into the world's second-most consumed beverage. After careful plucking of young leaves and buds, 
                    the leaves undergo withering to reduce moisture content, followed by rolling to break cell walls and 
                    release essential oils. <br/> 
                    For black tea, oxidation is crucial, allowing enzymes to interact with oxygen 
                    and develop rich flavors and deep colors, while green teas skip this step to preserve their 
                    fresh characteristics. The final firing or drying halts all enzymatic activity and stabilizes the product.<br/><br/>
                    This centuries-old craft combines agricultural expertise, precise timing, and regional traditions, 
                    resulting in distinctive flavor profiles from regions like China, India, Japan, and Sri Lanka that 
                    reflect their unique terroir.
                    </motion.p><br/>

                    <motion.h2
                    variants={FadeUp(1.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                     className='text-1xl lg:text-3xl font-bold text-green-900'
                    >The Exceptional Health Benefits of Ceylon Tea
                    </motion.h2>

                    <motion.p
                    variants={FadeUp(1.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    >Ceylon tea stands out not only for its distinctive flavor but also for its impressive array of health benefits. 
                    <span className='text-orange-600 font-semibold'>Rich in polyphenols and antioxidants</span>, this Sri Lankan treasure helps neutralize harmful free radicals in the body, 
                    potentially <span className='text-orange-700'>reducing inflammation</span> and lowering the risk of chronic diseases.<br/>
                    The moderate caffeine content in Ceylon tea provides a gentle energy boost while enhancing cognitive function, 
                    improving focus, and increasing alertness without the jittery side effects often associated with coffee.<br/><br/>
                     Its catechin content has been linked to improved heart health by <span className='text-orange-800'>potentially reducing LDL cholesterol</span> levels and 
                    supporting healthy blood vessel function.

                    </motion.p><br/>

                    <motion.h2
                    variants={FadeUp(1.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                     className='text-1xl lg:text-3xl font-bold text-yellow-700'
                    >How do you drink Ceylon tea?
                    </motion.h2>

                    <motion.p
                    variants={FadeUp(1.6)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    >Start with fresh, cold water brought to a rolling boil (around 212°F/100°C). Pre-warm your 
                    teapot or cup by rinsing with hot water. Use approximately one teaspoon of loose Ceylon tea per cup, 
                    or one tea bag if using bagged tea.<br/>
                    Pour the boiling water directly over the leaves and steep for 3-5 minutes depending on your desired strength. 
                    Ceylon teas typically need less steeping time than other black teas to avoid becoming overly astringent.
                    When properly brewed, Ceylon tea displays a bright, amber-golden color.<br/><br/>
                    The orthodox method is to drink it plain to fully appreciate its crisp, citrusy notes and medium body. However, a small amount of milk can complement its 
                    robust character without overwhelming the flavor profile.<br/><br/>
                    A slice of lemon can enhance the natural brightness of Ceylon tea, while a touch of honey rather than sugar can 
                    complement its subtle flavor notes without masking them. Ceylon tea is equally enjoyable hot or as an iced tea, 
                    where its natural clarity and brightness shine through.
                    </motion.p><br/>

                     
                     {/*.Button section..*/}
                    <motion.div 
                     variants={FadeUp(1.8)}
                     initial="hidden"
                     animate="visible"
                     className='flex justify-center md:justify-start' >
                    <button className='primary-btn' onClick={() => navigate("/shop")}>Go To Shop</button>
                    </motion.div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About;