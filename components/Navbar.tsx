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
    { label: 'Partners', href: '/partners' },
    { label: 'Join Us', href: '/join-us' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    if (pathname === '/') {
      window.location.href = '/';
    }
  };

  return (
    <div className="nav-buttons fixed top-0 left-0 w-full bg-black z-50 border-t-12  border-black py-2.5">
      <div className="relative flex items-center justify-center w-full px-4">
        {/* Hamburger menu - left side on mobile */}
        <div className="absolute left-4 md:hidden text-white text-xl cursor-pointer" onClick={toggleMenu}>
          &#9776;
        </div>
        
        {/* Centered nav links */}
        <div className={`nav-links ${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 w-full md:w-auto
         bg-black md:bg-transparent flex-col md:flex-row justify-center items-center border-b-2 border-gray-800 md:border-none gap-5`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-button px-4 py-3 md:py-2 text-white hover:text-gray-400 transition-colors text-sm md:text-base ${
                pathname === item.href ? 'font-medium' : ''
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                if (item.href === '/') {
                  handleHomeClick();
                }
              }}
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