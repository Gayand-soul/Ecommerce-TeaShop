
import React,{useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ceylonTeaData } from '../components/Products/data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/Shop/cart';
import { Link } from 'react-router-dom';


const Detail = ()=> {

  const {slug} = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail =ceylonTeaData.filter(product => product.slug === slug);
      if(findDetail.length > 0){
        setDetail(findDetail[0]);
      }
      else{
        window.location.href = '/';

      }

    }, [slug])

  const handleMinusQuantity = ()=> {
    setQuantity(quantity -1 < 1 ? 1: quantity - 1);// sidan skall alltid visa '1'
  }

  const handlePlusQuantity = () => {
    setQuantity(quantity +1 );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }));
  }

  
  return (
    <div>
      <h2 className='text-3xl text-start '>PRODUCT DETAIL</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
          <div>
            <img src={detail.image} alt='image' className='w-full rounded-3xl'/>
          </div>

          {/*. price.*/}
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl uppercase font-bold text-start text-lime-800'>{detail.name}</h1>
            <p className='font-bold text-2xl text-start text-pink-800'>
               €  {detail.price} 
            </p>
            
            {/*.Weight .*/}
            <p className='flex justify-between items-center'>
                <span className='text-1xl font-sm font-extrabold'>{detail.weight}</span>
            </p>

             {/*.Add/Remove händelser .*/}
            <div className='flex gap-5'>
              <div className='flex gap-2 justify-center items-center'>
                  <button className='bg-gray-200 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                  <span className='bg-gray-100 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center' >{quantity}</span>
                  <button  className='bg-gray-200 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
              </div>
            <button className='primary-btn' onClick={handleAddToCart}>
                Add to Cart
            </button>

            {/*.Button= för att återgå till listan.*/}
            <Link to= '/shop'>
              <button className='primary-btn'>
                  View all tea
              </button> 
            </Link>

            {/*.Description om te=rabbrtyn, formattering .*/}
          </div>
          {detail.description && (
            <p className=' text-gray-800 leading-6'>
              {detail.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line.trim()}
                  <br />
                </span>
              ))}
            </p>
          )}


        </div>

      </div>
    </div>
  )

}

export default Detail;