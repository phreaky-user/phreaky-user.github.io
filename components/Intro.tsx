'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Members', href: '/members' },
    { label: 'About', href: '/about' },
    { label: 'CTFs', href: '/ctfs' },
    { label: 'Projects', href: '/projects' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-buttons fixed top-0 left-0 w-full bg-black z-50 border-b-2 border-t-15 border-black">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="hamburger md:hidden text-white text-xl cursor-pointer" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`nav-links ${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent flex-col md:flex-row`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-button px-4 py-2 text-white hover:text-gray-400 transition-colors ${
                pathname === item.href ? 'font-bold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;