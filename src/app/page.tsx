'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/../public/logoTurkis.webp';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 2200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
     <motion.div 
    className={`z-30 absolute top-0 left-0 w-screen h-screen flex justify-center items-center transition-opacity `}
    style={{display: loaded ? 'none' : 'flex'}}
    initial={{ opacity: 1 , background: 'black'}}
    animate={{ opacity: 0 }}
    transition={{duration: 2}}
    >
      <Image src={Logo} alt="logo" width={200} height={200} className='' />
    </motion.div>
    <div
      className={`bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-nbluehome `}>
      <div className="homePageLogoVertical sm:homePageLogoHorizontal h-screen w-screen flex items-center justify-center ">
        <main className='z-20 h-screen w-10/12 flex xs:flex-col md:flex-row xs:items-center xs:justify-center md:items-end md:justify-around'>
          <Link href="water" className='xs:text-5xl md:text-7xl tracking-wider text-white font-black xs:m-16 md:m-24 hover:scale-110 transition'>woda</Link>
          <Link href="coffee" className='xs:text-5xl  md:text-7xl tracking-wider text-white font-black xs:m-16 md:m-24 hover:scale-110 transition'>kawa</Link>
        </main>
      </div>
    </div>
   
    </>
  );
}

