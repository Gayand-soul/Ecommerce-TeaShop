import React from 'react';
import { FaInstagram, FaFacebookF} from "react-icons/fa";
import { TbLeaf} from 'react-icons/tb';



const Footer = () => {
  return (
    <footer className='bg-secondary/10 text-green-800 py-12 mt-12'>
        <div className='container flex justify-between items-center'>
           
           {/*.Logo section..*/} 
           <div className='text-3xl flex items-center gap-2 font-bold uppercase pl-4'>
                <p className="text-3xl font-bold text-green-700">Tea</p>
                <TbLeaf className='text-green-950 text-4xl'/>
                <p className=" text-green-700 font-bold text-3xl">Shop</p>
            </div>


            {/*.SOCIAL MEDIA ICONS section..*/} 
            <div className='text-3xl flex items-center gap-4 mt-3'>
              <a
                href="https://www.instagram.com/dinprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors">
                
                <FaInstagram/>
              </a>
              <a
                href="https://www.facebook.com/gaya.andersson"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors">
                <FaFacebookF />
              </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;