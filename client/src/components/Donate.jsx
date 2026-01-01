import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donate = () => {
  const [amount, setAmount] = useState(500);
  const [keyId, setKeyId] = useState('');
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/payment/key`);
        setKeyId(data.key_id);
      } catch (error) {
        console.error('Error fetching key:', error);
      }
    };
    fetchKey();
  }, [API_URL]);

  const handlePayment = async () => {
    if (!keyId) {
      alert('Payment system not ready. Please try again.');
      return;
    }

    try {
      const { data: order } = await axios.post(`${API_URL}/api/payment/order`, {
        amount: amount
      });

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Musursta Foundation",
        description: "Donation for Education",
        order_id: order.id, 
        handler: async function (response) {
          const verifyData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            amount: amount
          };
          const result = await axios.post(`${API_URL}/api/payment/verify`, verifyData);
          alert(result.data.message);
        },
        prefill: {
          name: "Donor Name",
          email: "donor@example.com",
          contact: "9876543210"
        },
        theme: {
          color: "#d4af37"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error(error);
      alert("Payment Failed or Cancelled");
    }
  };

  return (
    <section id="donate" className="py-20 bg-neutral-900 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-brand-gold mb-10">Make a Donation</h2>
      
      <div className="bg-black border border-gray-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <p className="text-gray-400 mb-4 text-center">Select Amount (INR)</p>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[100, 500, 1000, 2000, 5000].map((val) => (
            <button 
              key={val}
              onClick={() => setAmount(val)}
              className={`py-2 rounded border ${amount === val ? 'bg-brand-gold text-black border-brand-gold' : 'border-gray-700 text-gray-300 hover:border-brand-gold'}`}
            >
              ₹{val}
            </button>
          ))}
          <input 
            type="number" 
            placeholder="Custom" 
            onChange={(e) => setAmount(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded px-2 text-center text-white focus:border-brand-gold outline-none"
          />
        </div>

        <button 
          onClick={handlePayment}
          className="w-full bg-brand-gold text-black font-bold py-4 rounded-xl text-xl hover:bg-yellow-500 transition"
        >
          Donate ₹{amount}
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">Secured by Razorpay</p>
      </div>
    </section>
  );
};
export default Donate;