/* eslint-disable no-unused-vars -- 'motion' is used in JSX */

import React, { useState }from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ceylonTeaData } from '../Products/data';



const OrderConfirm = ({ formData, orderPlaced, setOrderPlaced}) => {

    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate(); //hook för navigation
    const [showOrder, setShowOrder] = useState(true); // styr om Order Details visas

    return (
    <>
      {orderPlaced &&  showOrder && (
        <div className='relative p-6 rounded shadow-md bg-lotus-bg bg-cover bg-center'>
          <h3 className='text-3xl font-bold text-blue-900'>Order Summary</h3>

          {/* User Information */}
          <div className="mt-3">
            <h4 className='font-semibold text-2xl text-blue-700'>User Information</h4>
            <p className='text-left text-green-800'><strong>Full Name:</strong> {formData.fullName}</p>
            <p className='text-left  text-green-800'><strong>Email:</strong> {formData.email}</p>
            <p className='text-left  text-green-800'><strong>Shipping Address:</strong> {formData.address}</p>
            <p className='text-left  text-green-800'><strong>Postal Code:</strong> {formData.postalCode}</p>
            <p className='text-left  text-green-800'><strong>City:</strong> {formData.city}</p>
            <p className='text-left  text-green-800'><strong>Country:</strong> {formData.country}</p>
            <p className='text-left  text-green-800'><strong>Phone:</strong> {formData.phone}</p>
          </div>

          {/* Order Details */}
          <div className="mt-5">
            <h4 className='font-semibold text-2xl text-blue-700'>Order Details</h4>
            <ul className="space-y-4">
              {cartItems.map((item) => {
                const product = ceylonTeaData.find(p => p.id === item.productId);
                //Safety Check
                if(!product) return null;
                
                //Moms + Pris calculation
                const unitPriceExclVAT = product.price;
                const vatRate = 0.12;
                const unitVAT = unitPriceExclVAT * vatRate;
                const unitPriceInclVAT = unitPriceExclVAT + unitVAT;

                const quantity = item.quantity;
                const totalExclVAT = unitPriceExclVAT * quantity;
                const totalVAT = unitVAT * quantity;
                const totalInclVAT = unitPriceInclVAT * quantity;

                 return (
                <li key={item.productId} className='p-4 border rounded-md'>
                  <strong className='text-left  text-blue-900'>ItemID:</strong> {product.id}  <br />
                  <strong className='text-left  text-blue-900'>Item:</strong> {product.name} <br />
                  <strong className='text-left  text-blue-900'>Quantity:</strong> {item.quantity}  <br />
                  <strong className='text-left  text-blue-900'>Unit Price (excl. VAT):</strong> € {unitPriceExclVAT.toFixed(2)} <br />
                  <strong className='text-left  text-blue-900'>VAT 12% per item:</strong> € {unitVAT.toFixed(2)}  <br />
                  <strong className='text-left  text-blue-900'>Total Price (incl. VAT):</strong> € {totalInclVAT.toFixed(2)}
                </li>
              );
              })}
            </ul>
          </div>

          {/* Pay & Reset buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-end justify-end gap-4">
            <button className="bg-green-900 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
              onClick ={() => navigate('/shop/payment')}>
              GO TO PAYMENT
            </button>

            <button className="bg-gray-600 hover:bg-gray-800 text-slate-300 font-semibold py-2 px-6 rounded-md transition duration-200"
            onClick={() => {
              setShowOrder(false); //Dölj order Infot
              setOrderPlaced(false); //Dölj tack meddelandet!
            }}> 
              RESET
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default OrderConfirm;
