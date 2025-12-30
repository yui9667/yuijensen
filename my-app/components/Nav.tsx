'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
const navItems = [
  { href: '/about', label: 'ABOUT' },
  { href: '/work', label: 'WORK' },
  { href: '/contact', label: 'CONTACT' },
];
export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScroll, setIsOpenScroll] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsOpenScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full px-6 py-4 bg-(--color-background)   ${
          isScroll
            ? 'bg-opacity-90 backdrop-blur-md shadow-md transition-all duration-300'
            : 'bg-opacity-100 shadow-none '
        }`}
      >
        {/* Logo and Hamburger Menu */}

        <div className='flex items-center justify-between  max-w-350 mx-auto px-6 py-4'>
          {/* Logo */}
          <Link href='/'>
            <span className='text-lg font-bold md:max-w-350 '>YUI JENSEN</span>
          </Link>
          {/* Hamburger */}
          <button
            className=' md:hidden flex flex-col space-y-1'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            aria-label='Toggle Menu'
          >
            <span
              className={`block w-6 h-0.5 bg-(--color-letter) transition-transform duration-300 ${
                isOpen
                  ? 'rotate-45 translate-y-1.5 hover:text-(--color-accent)'
                  : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-(--color-letter) transition-opacity  ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-(--color-letter) transition-transform duration-300 ${
                isOpen
                  ? '-rotate-45 -translate-y-1.5 hover:text-(--color-accent)'
                  : ''
              }`}
            ></span>
          </button>
          {/*Desktop Navigation Links */}
          <ul className='hidden md:flex gap-6 self-start max-w-350 '>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Navigation Links */}
        <ul
          className={`md:hidden flex flex-col items-center gap-6  ${
            isOpen ? 'py-6' : 'h-0 overflow-hidden'
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.href}
              className='hover:text-(--color-accent) transition-all duration-300'
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
    </>
  );
}
