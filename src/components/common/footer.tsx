"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logoturkis from "@/../public/logoTurkis.webp";
import logoorange from "@/../public/logoOrange.webp";
import fb from "@/../public/fbIcon.webp";
import insta from "@/../public/instaIcon.webp";
import coffeebeanswave from "@/../public/coffeebeanswave.webp";
import waterwave from "@/../public/waterWave.webp";

export default function Footer() {
  const pathname = usePathname();
  let defaultColor = "";
  let defaultLogo = logoturkis;
  let defaultwave = waterwave;
  if (pathname === "/water" || pathname === "/dispenser") {
    defaultColor = "text-nturkis";
    defaultLogo = logoturkis;
    defaultwave = waterwave;
  } else {
    defaultColor = "text-norange";
    defaultLogo = logoorange;
    defaultwave = coffeebeanswave;
  }

  return (
    <>
      <Image
        src={defaultwave}
        width={800}
        height={800}
        className="overflow-x-hidden z-10 w-screen "
        priority
        alt={"BgOffice"}
      />
      <div className=" overflow-x-hidden z-10 text-white px-36 py-24 flex flex-wrap items-start justify-around w-screen bg-black">
        <div className="flex flex-col items-end">
          <Image
            src={defaultLogo}
            width={100}
            height={100}
            className=" m-0 sm:m-6 mt-2 w-auto h-auto"
            priority
            alt={"ncoffee makes your day"}
          />
        </div>
        <div className="text-xl mt-8 sm:mt-0 sm:ml-2">
          <p
            className={`text-2xl hidden sm:block  ${defaultColor} font-bold tracking-widest`}>
            Social
          </p>
          <ul className="mt-8 ">
            <li className="w-32 mt-6 flex justify-between">
              <Image
                src={fb}
                width={30}
                height={30}
                priority
                alt={"facebook"}
              />
              <Link
                href="https://www.facebook.com/ncoffeemakesyourday"
                target="_blank"
                className=" ml-4 hover:text-nlila hover:scale-110 transition">
                Facebook
              </Link>
            </li>
            <li className="w-32 mt-6 flex justify-between">
              <Image
                src={insta}
                width={30}
                height={30}
                priority
                alt={"instagram"}
              />
              <Link
                href="https://www.instagram.com/ncoffee.your.day/"
                target="_blank"
                className="ml-4 hover:text-nlila hover:scale-110 transition">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xl hidden xl:block">
          <p className={`text-2xl ${defaultColor} font-bold tracking-widest`}>
            Produkty
          </p>
          <ul className="mt-8 ">
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="/coffee"
                className=" hover:text-nlila hover:scale-110 transition">
                Kawa
              </Link>
            </li>
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="/water"
                className=" hover:text-nlila hover:scale-110 transition">
                Woda
              </Link>
            </li>
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="https://oryginalnysok.pl/"
                className=" hover:text-nlila hover:scale-110 transition">
                Soki
              </Link>
            </li>
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="/chemistry"
                className=" hover:text-nlila hover:scale-110 transition">
                Chemia
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xl hidden xl:block">
          <p className={`text-2xl ${defaultColor} font-bold tracking-widest`}>
            Maszyny
          </p>
          <ul className="mt-8 ">
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="/machines"
                className=" hover:text-nlila hover:scale-110 transition">
                Ekspresy
              </Link>
            </li>
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="/dispenser"
                className=" hover:text-nlila hover:scale-110 transition">
                Dystrybutory
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xl hidden xl:block">
          <p className={`text-2xl ${defaultColor} font-bold tracking-widest`}>
            firma
          </p>
          <ul className="mt-8 ">
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="/aboutus"
                className=" hover:text-nlila hover:scale-110 transition">
                O nas
              </Link>
            </li>
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="/clients"
                className=" hover:text-nlila hover:scale-110 transition">
                Klienci
              </Link>
            </li>
            <li className="w-32 mt-6 flex justify-between">
              <Link
                href="/contact"
                className=" hover:text-nlila hover:scale-110 transition">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
