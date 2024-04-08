"use client";

// Import necessary modules
import React, { useState, ReactNode, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerButton from "../elements/burgerButton";
import Image from "next/image";

import logoturkis from "@/../public/ncoffeeTurkis.webp";
import logoorange from "@/../public/ncoffeeOrange.webp";

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
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <p className="flex items-center h-14 leading-10 text-center hover:text-nlila hover:scale-105 transition-all">
          {title}
        </p>
      </div>
      {isOpen && (
        <div className="backdrop-blur mt-0 w-auto absolute top-full -left-4 bg-black/80 px-6 pb-4 rounded-b-xl shadow-xl transition-all duration-300 ease-in-out">
          {items.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <p className="block py-1 hover:text-nlila hover:scale-105 transition">
                {item.label}
              </p>
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
    { href: "/water", label: "Woda" },
    { href: "https://oryginalnysok.pl/", label: "Soki" },
    { href: "/machines", label: "Ekspresy" },
    { href: "/dispenser", label: "Dystrybutory" },
    { href: "/coffee", label: "Kawy" },
    { href: "/chemistry", label: "Chemia" },
  ];

  const [scrollDirection, setScrollDirection] = useState(false);
  const [lastPageOffset, setLastPageOffset] = useState(0);

  const handleDirection = () => {
    if (window.pageYOffset > lastPageOffset) {
      setScrollDirection(true);
    } else if (window.pageYOffset < lastPageOffset) {
      setScrollDirection(false);
    }
  };

  const handleScroll = () => {
    handleDirection();
    setLastPageOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const pathname = usePathname();
  let defaultColor = "";
  let defaultLogo = null;
  if (
    pathname === "/water" ||
    pathname === "/dispenser" ||
    pathname === "/" ||
    pathname.includes("Waters") ||
    pathname.includes("Dispensers")
  ) {
    defaultColor = "text-nturkis";
    defaultLogo = logoturkis;
  } else {
    defaultColor = "text-norange";
    defaultLogo = logoorange;
  }

  return (
    <header
      className={` ${
        scrollDirection ? "-translate-y-48" : "translate-y-0"
      } bg-black lg:bg-black/80 backdrop-blur fixed top-0  tran px-4 z-50 w-screen h-14 flex items-center justify-between transition-all duration-1000`}
    >
      <div className="basis-1/5">
        <Link href="/" passHref>
          <Image
            src={defaultLogo}
            width={100}
            height={100}
            className=" m-0 sm:m-6 mt-2 w-auto h-auto"
            priority
            alt={"ncoffee makes your day"}
          />
        </Link>
      </div>
      <div className="basis-1/5 flex justify-end">
        <BurgerButton />
      </div>
      <div className="hidden w-3/4 lg:flex justify-end gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-20 pr-4 xl:pr-20 items-center text-white tracking-wider">
        <DropdownMenu title="Napoje" items={menuItems.slice(0, 2)} />
        <DropdownMenu title="Kawa" items={menuItems.slice(4, 6)} />
        <DropdownMenu title="Urządzenia" items={menuItems.slice(2, 4)} />
        <Link href="/abouts" passHref>
          <p className=" basis-20 text-center hover:text-nlila hover:scale-105 transition-all">
            O nas
          </p>
        </Link>
        <Link href="/clients" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition-all">
            Partnerzy
          </p>
        </Link>
        <Link href="/contact" passHref>
          <p className="basis-20 text-center hover:text-nlila hover:scale-105 transition-all">
            Kontakt
          </p>
        </Link>
      </div>
      {children}
    </header>
  );
};

export default NavUni;
function setIsOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
