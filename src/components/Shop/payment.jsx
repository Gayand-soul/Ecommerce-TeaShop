
import React from 'react';

const Payment = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-1">Payment</h2>

      {/* Card Type Radio */}
      <div className="mb-6">
        <p className="font-medium mb-2">Choose Card Type</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="cardType" className="accent-blue-600" defaultChecked />
            <span>Visa</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="cardType" className="accent-blue-600" />
            <span>MasterCard</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="cardType" className="accent-blue-600" />
            <span>Amex</span>
          </label>
        </div>
      </div>

      {/* Card Number */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
        />
      </div>

      {/* Expiration Date & Security Code */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Expiration Date (MM/YY)</label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Security Code</label>
          <input
            type="text"
            placeholder="CVV"
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
          />
        </div>
      </div>

      {/* Name on Card */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Name on Card</label>
        <input
          type="text"
          placeholder="Full name"
          className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
        />
      </div>

      {/* Info Text */}
      <p className="text-sm text-gray-600 mb-6">
        By clicking PAY NOW, you authorize this payment to be processed with the provided card
        details. This transaction is secure and encrypted. Please ensure all information is correct
        before proceeding. No refund will be available once payment is confirmed.
      </p>

      {/* Pay Now Button */}
      <div className="text-center">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold transition">
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default Payment;
