
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../Shop/cart';
import cartb from '../../assets/images/cartb.png';



const Header = () => {

  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch( toggleStatusTab());
  }


  return (

    <header className='flex justify-between items-center mb-5'> 

      <div className='flex items-center gap-[10px]'>

        {/*.Link till HOME = Products, About och framsidan*/}
        <Link to= "/" className='text-xl font-semibold text-red-900 border border-yellow-500 px-3 py-1 rounded
        shadow-[0px_10px_14px_-7px_#de0029]
        hover:!scale-110 duration-300'>Home</Link>

        {/*.Link till 4 sorters teprodukter = /shop.*/}
        <Link to= "/shop" className='text-xl  font-semibold text-red-900 border border-yellow-500 px-6 py-1 rounded
        shadow-[0px_10px_14px_-7px_#de0029]
        hover:!scale-110 duration-300'>Continue Shopping</Link>

      </div>
      


      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative
      shadow-[0px_10px_14px_-1px_#de0029]
      hover:!scale-110 duration-300'
      onClick={handleOpenTabCart}>
        {/*.bild på kundvagn.*/}
        <img src={cartb} alt='kundvagn bild' className='w-6'/>
        <span className='absolute top-2/3 right-1/2  bg-red-700 text-white text-sm
        w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
      </div>

    </header>
    
  )
}

export default Header;