
import React from 'react';
import ProductCart from '../components/ProductCart/productCart';
import { ceylonTeaData } from '../components/Products/data';






const ListOfProducts = () => {

  return (
    <div className='mt-10 '>
        <h1 className='text-5xl my-5 font-poppins font-bold text-red-800 text-center'>Our Products</h1>
        
        {/*.4st cards med tebild och add to cart knap osv.*/}
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {ceylonTeaData.map((product, key) => 
                <ProductCart key={key} data={product} />
            )}
        </div>
    </div>
  )
}

export default ListOfProducts;