
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import CartItem  from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import { toggleStatusTab } from '../Shop/cart';


const CartTab = () => {

  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);

 
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCloseTabCart = () => {
      dispatch(toggleStatusTab());
    }

  return (
    <div className={`fixed top-0 right-0 bg-yellow-600 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
    transform transistion-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""} `}> 

        <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
        <div className='p-5'>
          {carts.map((item, key) => 
             < CartItem key = {key} data= {item}/>
          )}
        </div>
        
        <div className='grid grid-cols-2'>
          <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
          <button className='bg-primary text-white' onClick={() => navigate('/shop/checkout')}>CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartTab;