/* eslint-disable no-unused-vars -- 'motion' is used in JSX */

import React, { useEffect, useState } from 'react';
import BigCake from '../../assets/images/BigCake.jpg';
import fruitCake from '../../assets/images/FruitCake.jpg';
import smallCakes from '../../assets/images/smallCakes.jpg';
import tagcakes from '../../assets/images/tagcakes.jpg';
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';


function Cake() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
  fetch('https://682614c8397e48c91314ed27.mockapi.io/cake')
    .then(response => {
      if (!response.ok) throw new Error("API not found");
      return response.json();
    })
    .then(data => {
      console.log("Cake API RAW data:", data); // 👈 Viktig logg

      if (!Array.isArray(data)) {
        console.error("❌ Data is not an array:", data);
        return;
      }

      const ids = data.map(cake => cake.id);
      const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
      
      setCakes(data);
    })
    .catch(error => console.error('Error fetching cakes:', error));
}, []);


  return (
    <div id="cake-section" className="relative min-h-screen bg-cover bg-center bg-no-repeat mt-14"> 
      <div className='flex flex-col lg:flex-row justify-between px-8'>{/* FLEX-CONTAINER */}
        <div className="p-12 max-w-md ml-10 ">
            <motion.h1 
            initial={{ opacity:0, x: -200}}
            whileInView={{ opacity:1, x:0}}
            transition={{ duration:1, delay: 0.4}}
            className="text-6xl font-bold leading-relaxed xl:leading-loose text-pink-600 pl-1 mt-12 mb-4  whitespace-nowrap">Heavenly Delights for <span className='text-pink-700'>Afternoon Tea</span>
            </motion.h1>
                
                <ul>
                    {Array.isArray(cakes) && cakes.map((cake) => (
                        <motion.li
                        initial={{ opacity:0, x: -200}}
                        whileInView={{ opacity:1, x:0}}
                        transition={{ duration:1, delay: 0.4}}
                        key={cake.id} className="mb-2 border-b pb-2">

                           <h3 className="text-xl text-pink-700 font-semibold">{cake.Cake}</h3>
                            <p className='text-green-900'><strong>Price:</strong> € {cake.Price}</p>

                        </motion.li>
                    ))}
                </ul>

                <div className="flex gap-4 mt-8">
                        <img
                            src={BigCake }
                            alt="Large Cake"
                            className="w-75 h-auto rounded-lg shadow-lg"
                        />
                        <img
                            src={smallCakes}
                            alt="Medium Cake"
                            className="w-50 h-auto rounded-lg shadow-md"
                        />
                        
                        <img
                            src={tagcakes }
                            alt="Small Cake"
                            className="w-50 h-auto rounded-lg shadow"
                        />
                  </div>


        </div>
        
        {/* 👉 HÖGRA KOL: NY TEXTDEL */}
        <div className="p-6 max-w-xl mt-12 lg:mt-24 text-gray-800 space-y-6"> {/* NY */}
          <h2 className="text-3xl font-semibold text-pink-700">Our Freshly Baked Cakes</h2>
          <p className="text-lg leading-relaxed">
            Complement your perfect cup of tea with our artisanal cakes, baked with the finest ingredients
             to enhance your tea experience. Each cake is freshly baked to order in our dedicated kitchen. 
             We prepare your cake within 48 hours of receiving your order and dispatch it the same day it's 
             baked to ensure maximum freshness.<br/>
             Your cake will arrive beautifully presented in our elegant, eco-friendly packaging designed to 
             protect your delicious treat during transit. Each package includes a handwritten 
             note with serving suggestions to pair with your favorite teas.<br/>
          </p>

          <h3 className="text-2xl font-semibold text-pink-700">Delivery Options</h3>
          <p className="text-lg leading-relaxed">
            -Standard Delivery: 3-5 business days <br/>
            -Express Delivery: 1-2 business days (additional fee applies)<br/>
            -Local Pickup: Available from our main bakery location<br/>
            All cakes are carefully packed with temperature-controlled insulation to 
            maintain freshness during shipping. For specific dietary requirements or 
            special occasions, please contact us directly.
          </p>

          <h3 className="text-2xl font-semibold text-pink-700">Delivery Area Information</h3>
          <p className="text-lg leading-relaxed">
            Our delicious cake slices are available for delivery to bring the perfect tea companion 
            right to your doorstep. Each order can include 4 to 12 slices of your favorite cakes, 
            ideal for personal enjoyment or small gatherings.<br/>
            We currently offer delivery to the following areas:<br/>
            Central city and immediate suburbs: Same-day delivery available for orders placed before 11 AM.<br/>
            Metropolitan area: Next-day delivery available for all orders placed before 3 PM.<br/>
            Regional deliveries (within 100 km): 2-3 business days.<br/>
            National shipping: Available to all major cities with 3-5 business day delivery.<br/>
            Delivery Notes: <br/>
            All cake slices are individually wrapped and carefully packaged to maintain freshness during transit. 
            For rural or remote locations, please allow an additional 1-2 days for delivery. 
            Free delivery on orders over €35 within our local delivery zone.
            Temperature-controlled packaging used for all deliveries during summer months.
            Custom delivery arrangements available for special events or corporate orders.<br/>
          </p> 
          <p className='text-green-600'>
            Not in our standard delivery area? Contact us directly at orders@teashop.com to discuss
            special delivery options for your location.
          
          </p>  
          
        </div>
        
        </div>
    </div>
  );
}

export default Cake;
