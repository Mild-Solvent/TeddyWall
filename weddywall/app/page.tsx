// app/page.tsx
import React from 'react';
import Link from 'next/link';
import ConnectButton from './components/ConnectButton';
import SendFundsForm from './components/SendFundsForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold mb-8 text-center animate-pulse">CryptoWall</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 transform hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-semibold mb-4">Welcome to CryptoWall</h2>
          <p className="text-xl mb-4">Your secure gateway to crypto transactions</p>
          <ConnectButton />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Connect your MetaMask wallet</li>
              <li>Enter recipient's address and amount</li>
              <li>Confirm the transaction</li>
              <li>Enjoy secure and fast transfers!</li>
            </ol>
          </div>
          <SendFundsForm />
        </div>
        <div className="mt-16 text-center">
          <Link href="/about" className="text-blue-300 hover:text-blue-100 mr-4">Learn More</Link>
          <Link href="/contact" className="text-blue-300 hover:text-blue-100">Get in Touch</Link>
        </div>
      </div>
    </main>
  );
}