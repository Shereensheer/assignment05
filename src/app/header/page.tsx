import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => (
  <header className="bg-black text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <div className="font-bold text-xl">My Portfolio</div>
      <ul className="flex gap-4">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/contact" className="hover:underline">contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
