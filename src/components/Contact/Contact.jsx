/* eslint-disable no-unused-vars -- 'motion' is used in JSX */

import React from "react";
import teagarden1 from '../../assets/images/teagarden1.jpg';
import { motion } from 'framer-motion';
import { FadeLeft, FadeUp } from '../../utility/animation';


function Contact() {
  return (
    <div id="contact-section"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat mt-24"
      style={{ backgroundImage: `url(${teagarden1})`, backgroundSize: 'cover'}}
    >

      <div className="p-12 max-w-md ml-10 ">
        

        <form className="bg-white bg-opacity-90 p-4 rounded text-left">

          <motion.h2
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="text-xl font-semibold mb-4 text-green-900">Contact Us</motion.h2><br/>
        
          <motion.input
          variants={FadeUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          />
          <motion.input
          variants={FadeUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          />

          <motion.input
          variants={FadeUp(1.0)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          type="text"
          placeholder="Subject"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          />

          <motion.textarea
          variants={FadeUp(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          placeholder="Message"
          className="w-full p-2 mb-3 h-32 border border-gray-300 rounded resize-none"
          />
          <motion.button
          variants={FadeUp(1.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          type="submit" className='primary-btn'>
            Send
          </motion.button>

      </form>
      </div>
      
    </div>
  );
}

export default Contact;

