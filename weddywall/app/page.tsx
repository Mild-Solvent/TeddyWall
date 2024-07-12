// app/page.tsx
import React from 'react';
import ConnectButton from './components/ConnectButton';
import SendFundsForm from './components/SendFundsForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Crypto Paywall</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Connect your MetaMask wallet using the button above</li>
            <li>Once connected, you can send funds to another account</li>
            <li>Enter the recipient's address and the amount to send</li>
            <li>Confirm the transaction in MetaMask</li>
          </ol>
        </div>
        <ConnectButton />
        <SendFundsForm />
      </div>
    </main>
  );
}