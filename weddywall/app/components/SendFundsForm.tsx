// app/components/SendFundsForm.tsx
'use client';

import React, { useState } from 'react';

const SendFundsForm = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement the logic to send funds using ethers.js or web3.js
    console.log('Sending', amount, 'to', recipient);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-4">Send Funds</h2>
      <div className="mb-4">
        <label htmlFor="recipient" className="block text-sm font-medium mb-2">Recipient Address</label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium mb-2">Amount (ETH)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          step="0.0001"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Send Funds
      </button>
    </form>
  );
};

export default SendFundsForm;