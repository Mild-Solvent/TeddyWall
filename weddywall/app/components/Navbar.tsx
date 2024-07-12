// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold">CryptoWall</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;