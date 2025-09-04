"use client";
import { easeIn, backIn, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logoTurkis.webp";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <motion.div
        className={`z-30 absolute top-0 left-0 w-screen h-screen transition-opacity 
        ${isLoading ? "block" : "hidden"}`}
        initial={{ opacity: 1, background: "black" }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 3, ease: easeIn }}></motion.div>

      <motion.div
        className={`z-40 absolute top-0 w-screen h-screen flex justify-center items-center transition-opacity
        ${isLoading ? "block" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, ease: backIn, delay: 0.2 }}>
        <Image src={Logo} alt="logo" width={300} height={200} className="" />
      </motion.div>

      <div
        className={`bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-nbluehome h-dvh`}>
        <div className="homePageLogoVertical landscape:homePageLogoHorizontal h-screen w-screen flex items-center justify-center ">
          <main className="z-20 h-screen w-10/12 flex portrait:flex-col portrait:items-center portrait:justify-center md:items-end md:justify-around">
            <Link
              href="water"
              className="xs:text-5xl md:text-7xl tracking-wider text-white font-black xs:m-16 md:m-24 hover:scale-125 transition">
              woda
            </Link>
            <Link
              href="coffee"
              className="xs:text-5xl  md:text-7xl tracking-wider text-white font-black xs:m-16 md:m-24 hover:scale-125 transition">
              kawa
            </Link>
          </main>
        </div>
      </div>
    </>
  );
}
