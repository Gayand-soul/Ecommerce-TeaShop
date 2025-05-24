
import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../components/Shop/user';
import OrderConfirm from '../components/Shop/orderConfirm';
import { openStatusTab } from '../components/Shop/cart';


const  Checkout = () => {

    const dispatch = useDispatch();

    //hålla koll på beställn är gjord
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        postalCode: '',
        city:'',
        country: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
       
        dispatch(setUserData(formData));
        setOrderPlaced(true);
    };

    
  return (
    <div>
        <h2 className='text-3xl text-center'>CHECKOUT DETAILS</h2>
        <div className='grid grid-cols-2 gap-5 mt-5'>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

                     {/* Full Name Input */}
                    <div className='flex flex-col gap-5 bg-gray-50 p-6 rounded shadow-md'>
                        <label className='flex flex-col text-left'>
                            <span className='mb-1 font-medium'>Full Name</span>
                            <input type='text' placeholder='Your full name' value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className='border border-gray-300 p-2 rounded' required/>
                        </label>

                    {/* Email Input */}
                        <label className='flex flex-col text-left'>
                            <span className='mb-1 font-medium'>Email Address</span>
                            <input type='email' placeholder='you@example.com' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className='border border-gray-300 p-2 rounded' required/>
                        </label>

                     {/* Shipping Address Input */}
                        <label className='flex flex-col text-left'>
                            <span className='mb-1 font-medium'>Shipping Address</span>
                            <input type='text' placeholder='Street address, postal code' value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className='border border-gray-300 p-2 rounded' required/>
                        </label>
                    
                    {/* Postal Code Input */}
                        <label className='flex flex-col text-left'>
                            <span className='mb-1 font-medium'>Postal Code</span>
                            <input type='text' placeholder='postal code' value={formData.postalCode} onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                            className='border border-gray-300 p-2 rounded' required/>
                        </label>

                    {/* City Input */}
                        <label className='flex flex-col text-left'>
                            <span className='mb-1 font-medium'>City</span>
                            <input type='text' placeholder='city' value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className='border border-gray-300 p-2 rounded' required/>
                        </label>

                    {/* Country Input */}
                        <label className='flex flex-col text-left'>
                            <span className='mb-1 font-medium'>Country</span>
                            <input type='text' placeholder='Country' value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className='border border-gray-300 p-2 rounded' required/>
                        </label>

                    {/* Phone Input */}
                        <label className='flex flex-col text-left'>
                            <span className='mb-1 font-medium'>Phone</span>
                            <input type='text' placeholder='phone' value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className='border border-gray-300 p-2 rounded' required/>
                        </label>

                    {/* Submit Button */}
                        <button type='submit' className='bg-green-800 text-white py-2 rounded hover:bg-green-400 transition'>
                            PLACE ORDER
                        </button> 
                    
                    {/* Reset Button */}
                    <button
                    type="button"
                    className="bg-gray-600 hover:bg-gray-800 text-slate-300 font-semibold py-2 px-6 rounded-md transition duration-200"
                     
                    onClick={() => {
                       
                        setFormData({
                        fullName: '',
                        email: '',
                        address: '',
                        postalCode: '',
                        city: '',
                        country: '',
                        phone: ''
                        });
                        setOrderPlaced(false);
                        dispatch(setUserData(null)); // rensar redux-användardata
                        dispatch(openStatusTab());
                    }}
                    >
                    RESET
                    </button>

                    {/* Confirmation Message */}
                        {orderPlaced && (
                            <div className='mt-5 p-4 bg-green-600 text-green-800 border border-green-300 rounded'>
                                <h3 className='text-xl font-semibold text-cyan-100'>Thank you!</h3>
                                <p className=' text-cyan-100 text-xl'>Your order has been placed successfully!</p>
                            </div>
                        )} 

                    </div>
            </form>

            {/* ORDER CONFIRMATION (Right side) */}
            <div>
                <OrderConfirm formData={formData} orderPlaced={orderPlaced} setOrderPlaced={setOrderPlaced}/>
            </div>
                
        </div>

    </div>
  );
};

export default Checkout;