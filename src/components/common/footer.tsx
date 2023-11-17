'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


import logo from '@/../public/logoTurkis.webp'
import fb from '@/../public/fbIcon.webp'
import insta from '@/../public/instaIcon.webp'



export default function Footer() {
  const pathname = usePathname();
  let defaultColor = "";
  if (pathname === '/coffee' || pathname === '/chemistry' || pathname === '/machines'){
    defaultColor = "text-norange";
  } else {
    defaultColor = "text-nturkis";
  }
  


  return (
    <div className='text-white px-36 py-24 flex items-start justify-around w-screen bg-black'>
      <div className='flex flex-col items-end'>
      <Image src={logo} width={120} height={100} className='m-6 mt-16' priority alt={'ncoffee makes your day'}/>
      </div>
      <div className='text-xl '>
        <p className={`text-2xl ${defaultColor} font-bold tracking-widest`}>Social</p>
        <ul className='mt-8 '>
          <li className='w-32 mt-6 flex justify-between'><Image src={fb} width={30} height={30} priority alt={'facebook'}/><Link href="https://www.facebook.com/ncoffeemakesyourday" target="_blank" className=' hover:text-nlila hover:scale-110 transition' >Facebook</Link></li>
          <li className='w-32 mt-6 flex justify-between'><Image src={insta} width={30} height={30} priority alt={'instagram'}/><Link href="https://www.instagram.com/ncoffee.your.day/" target="_blank" className=' hover:text-nlila hover:scale-110 transition' >Instagram</Link></li>
        </ul>
      </div>
      <div className='text-xl'>
        <p className={`text-2xl ${defaultColor} font-bold tracking-widest`}>Produkty</p>
        <ul className='mt-8 '>
          <li className='w-32 mt-6 flex justify-between'><Link href="/coffee" className=' hover:text-nlila hover:scale-110 transition'>Kawa</Link></li>
          <li className='w-32 mt-6 flex justify-between'><Link href="/water" className=' hover:text-nlila hover:scale-110 transition'>Woda</Link></li>
          <li className='w-32 mt-6 flex justify-between'><Link href="/juice" className=' hover:text-nlila hover:scale-110 transition'>Soki</Link></li>
          <li className='w-32 mt-6 flex justify-between'><Link href="/chemistry" className=' hover:text-nlila hover:scale-110 transition'>Chemia</Link></li>

        </ul>
      </div>
      <div className='text-xl'>
        <p className={`text-2xl ${defaultColor} font-bold tracking-widest`}>Maszyny</p>
        <ul className='mt-8 '>
          <li className='w-32 mt-6 flex justify-between'><Link href="/machines" className=' hover:text-nlila hover:scale-110 transition'>Ekspresy</Link></li>
          <li className='w-32 mt-6 flex justify-between'><Link href="/dispenser" className=' hover:text-nlila hover:scale-110 transition'>Dystrybutory</Link></li>
        </ul>
      </div>
      <div className='text-xl'>
        <p className={`text-2xl ${defaultColor} font-bold tracking-widest`}>firma</p>
        <ul className='mt-8 '>
          <li className='w-32 mt-6 flex justify-between'><Link href="/aboutus" className=' hover:text-nlila hover:scale-110 transition'>O nas</Link></li>
          <li className='w-32 mt-6 flex justify-between'><Link href="/clients" className=' hover:text-nlila hover:scale-110 transition'>Klienci</Link></li>
          <li className='w-32 mt-6 flex justify-between'><Link href="/contact" className=' hover:text-nlila hover:scale-110 transition'>Kontakt</Link></li>
        </ul>
      </div>
    </div>
  )
}