// app/contact/page.tsx
import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 max-w-2xl mx-auto transform hover:scale-105 transition duration-300">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Send Message
            </button>
          </form>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <p className="mb-2">Email: contact@cryptowall.com</p>
          <p className="mb-2">Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Blockchain Street, Crypto City, CC 12345</p>
        </div>
        <div className="mt-16 text-center">
          <Link href="/" className="text-blue-300 hover:text-blue-100 mr-4">Back to Home</Link>
          <Link href="/about" className="text-blue-300 hover:text-blue-100">About Us</Link>
        </div>
      </div>
    </main>
  );
}