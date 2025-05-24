
import React from 'react';
import { Link } from 'react-router-dom';
import cartb from '../../assets/images/cartb.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Shop/cart';

const ProductCart = (props) => {

    const carts = useSelector(store => store.cart.items);
    console.log(carts);
    const { id, name, weight, price, image, slug } = props.data;
    const dispatch = useDispatch();

    const handleAddToCart = ()=> {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }

    return (

        
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to = {slug}>
          {/*. te bild i guld lock = image (ta inte bort!) .*/}
           <img src= {image} alt='cart' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]'/>
        </Link>
      

         {/*.Name of the tea i guld lock med te.*/}
        <h3 className='text-2xl py-3 text-center text-red-500 font-medium'>{name}</h3>
        <div className='flex justify-between items-center'>
            <p>
                € <span className='text-3xl font-medium'>{price}</span>   
            </p>

            {/*.Button = Add to cart .*/}
            <button className='primary-btn px-5' 
            onClick={handleAddToCart}>
                <img src={cartb} alt='cart' className='w-5'/>
                Add to Cart
            </button>

        </div>

        {/*.Weight .*/}
        <p className='flex justify-between items-center'>
            <span className='text-1xl font-sm'>{weight}</span>
        </p>
         {/*.ArtID to the card .*/}
        <p className='flex items-center  text-yellow-500'>
           ArticleID: <span className='text-1xl font-bold text-yellow-600'>{id}</span>
        </p>

    </div>
  )
}

export default ProductCart;










