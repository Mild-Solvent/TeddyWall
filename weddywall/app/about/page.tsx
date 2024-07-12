// app/about/page.tsx
import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center">About CryptoWall</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 transform hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-xl mb-4">
            CryptoWall aims to provide a secure, fast, and user-friendly platform for crypto transactions.
            We believe in the power of blockchain technology to revolutionize financial interactions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Secure MetaMask integration</li>
              <li>Fast and low-cost transactions</li>
              <li>User-friendly interface</li>
              <li>Support for multiple cryptocurrencies</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="mb-4">
              We are a group of passionate blockchain enthusiasts and experienced developers
              committed to making crypto transactions accessible to everyone.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link href="/" className="text-blue-300 hover:text-blue-100 mr-4">Back to Home</Link>
          <Link href="/contact" className="text-blue-300 hover:text-blue-100">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}