
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../Shop/cart';
import { ceylonTeaData } from '../Products/data';


const CartItem = (props) => {

    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        const findDetail = ceylonTeaData.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
          productId: productId,
          quantity: quantity - 1
        }));
    }
   
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
          productId: productId,
          quantity: quantity + 1
        }));
    }


  return (
    <div className='flex flex-col mb-2'>
      {/* every item has these details */}
        <div className='flex justify-between items-center bg-slate-600 text-white text-sm p-2 border-b-3 border-slate-700
        gap-3 rounded-md w-full min-h-20'>
          <img src = {detail.image} alt='' className='w-12 h-15 object-cover rounded-md'/>
          <h3 className='flex-1 text-sm'>{detail.name}</h3>
          <p className='w-24 text-center'> € {detail.price * quantity}</p>

          
          <div className='w-24 flex justify-between items-center gap-2 '>
              <button className='bg-gray-300 rounded-full w-6 h-6 text-cyan-900 flex items-center justify-center font-bold -ml-2' onClick={handleMinusQuantity}>-</button>
              <span>{quantity}</span>
              <button className='bg-gray-300 rounded-full w-6 h-6 text-cyan-900 flex items-center justify-center font-bold ' onClick={handlePlusQuantity}>+</button>
          </div>
      </div>

    </div>
    
  )
}

export default CartItem;