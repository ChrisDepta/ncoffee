"use Client";
import React, { useState, useEffect } from "react";

export default function BurgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    // Dodanie nasłuchiwania na scroll
    window.addEventListener("scroll", handleScroll);

    // Usunięcie nasłuchiwania przy odmontowywaniu komponentu
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);
  return (
    <nav className="relative md:hidden">
      <button
        className="z-50 flex flex-col space-y-2 w-10 h-10 justify-center items-center group bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-8 h-0.5 bg-white transition"></span>
        <span className="block w-8 h-0.5 bg-white transition"></span>
        <span className="block w-8 h-0.5 bg-white transition"></span>
      </button>

      {isOpen && (
        <div className="absolute top-full -right-4  w-[100vw] m-0 px-8 mt-2 py-2 text-2xl bg-black backdrop-blur shadow-xl transition transform origin-top-right">
          <a
            href="/coffee"
            className="block px-4 py-2 text-white  transition"
          >
            Kawa
          </a>
          <a
            href="/water"
            className="block px-4 py-2 text-white transition"
          >
            Woda
          </a>
          <a
            href="https://oryginalnysok.pl/"
            className="block px-4 py-2 text-white  transition"
          >
            Soki
          </a>
          <a
            href="/machines"
            className="block px-4 py-2 text-white  transition"
          >
            Ekspresy
          </a>
          <a
            href="/dispenser"
            className="block px-4 py-2 text-white  transition"
          >
            Dystrybutory
          </a>
          <a
            href="/chemistry"
            className="block px-4 py-2 text-white  transition"
          >
            Chemia
          </a>
          <a
            href="/abouts"
            className="block px-4 py-2 text-white  transition"
          >
            O nas
          </a>
          <a
            href="/clients"
            className="block px-4 py-2 text-white  transition"
          >
            Partnerzy
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-white  transition"
          >
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
}
