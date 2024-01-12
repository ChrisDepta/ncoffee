'use client'

// Import necessary modules
import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define types for the DropdownMenu component props
interface DropdownMenuProps {
  title: string;
  items: { href: string; label: string }[];
}

// DropdownMenu component
const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <p className="text-center hover:text-nlila hover:scale-105 transition-all">{title}</p>
      </div>
      {isOpen && (
        <div className="w-48 absolute top-full -left-4 mt-0 pt-6 bg-black p-6 rounded-xl shadow-xl transition-all duration-300 ease-in-out">
          {items.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <p className="block py-1 hover:text-nlila hover:scale-105 transition">{item.label}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


// Define types for the NavUni component props
interface NavUniProps {
  children?: ReactNode;
}

// NavUni component
const NavUni: React.FC<NavUniProps> = ({ children }) => {
  const menuItems = [
    { href: '/water', label: 'WODA' },
    { href: 'https://oryginalnysok.pl/', label: 'SOKI' },
    { href: '/machines', label: 'EKSPRESY' },
    { href: '/dispenser', label: 'DYSTRYBUTORY' },
    { href: '/coffee', label: 'KAWY' },
    { href: '/chemistry', label: 'CHEMIA' },
  ];

  const pathname = usePathname();
  let defaultColor = "";
  if (pathname === '/coffee' || pathname === '/chemistry' || pathname === '/machines' || pathname === '/contact') {
    defaultColor = "text-norange";
  } else {
    defaultColor = "text-nturkis";
  }

  return (
    <header className="backdrop-blur-xl fixed top-0 z-20 w-screen bg-black h-20 flex items-center justify-center">
      <div className="bg-black w-3/4 flex justify-evenly items-center text-m text-white tracking-wider">
        <DropdownMenu title="NAPOJE" items={menuItems.slice(0, 2)} />
        <DropdownMenu title="KAWA" items={menuItems.slice(4, 6)} />
        <DropdownMenu title="URZADZENIA" items={menuItems.slice(2, 4)} />
        <Link href="/" passHref>
          <p className={`${defaultColor} text-2xl basis-40 text-center font-bold hover:text-nlila hover:scale-105 transition-all`}>
            NCOFFEE
          </p>
        </Link>
        <Link href="/abouts" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition-all">O NAS</p>
        </Link>
        <Link href="/clients" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition-all">KLIENCI</p>
        </Link>
        <Link href="/contact" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition-all">KONTAKT</p>
        </Link>
      </div>
      {children}
    </header>
  );
};

export default NavUni;
