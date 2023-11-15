'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href="#">
        <p className="text-center hover:text-nlila hover:scale-105 transition-all">{title}</p>
      </Link>
      {isOpen && (
        <div className="w-40 absolute -left-6 mt-0 pt-6 bg-black p-6  rounded shadow-md  transition">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <p className="block py-1 hover:text-nlila hover:scale-105 transition">{item.label}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function NavUni() {
  const menuItems = [
    { href: '/water', label: 'WODA' },
    { href: '/juice', label: 'SOKI' },
    { href: '/machines', label: 'EKSPRESY' },
    { href: '/dispenser', label: 'DYSTRYBUTORY' },

  ];

  return (
    <header className="backdrop-blur-xl fixed top-0 z-20 w-screen bg-black h-20 flex items-center justify-center">
      <div className=" bg-black w-3/4 flex justify-evenly items-center text-m text-white tracking-wider">
        <DropdownMenu title="NAPOJE" items={menuItems.slice(0, 2)} />
        <Link href="/coffee" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition">KAWA</p>
        </Link>        <DropdownMenu title="URZADZENIA" items={menuItems.slice(2, 4)} />
        <Link href="/" passHref>
          <p className="text-2xl basis-40 text-center font-bold hover:text-nlila hover:scale-105 transition-all">
            NCOFFEE
          </p>
        </Link>
        <Link href="/aboutus" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition-all">O NAS</p>
        </Link>
        <Link href="/clients" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition-all">KLIENCI</p>
        </Link>
        <Link href="/contact" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition-all">KONTAKT</p>
        </Link>
      </div>
    </header>
  );
}
