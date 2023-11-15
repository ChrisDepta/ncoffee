import React from 'react'
import Link from 'next/link'


export default function NavUni() {
  return (
    <header className='backdrop-blur-xl fixed top-0 z-20 w-screen bg-black h-20 flex items-center justify-center '>
      <div className=' w-3/4 flex justify-evenly items-center text-m text-white tracking-wider'>
      <Link href="/water" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>WODA</Link>
      <Link href="/juice" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>SOKI</Link>
      <Link href="/dispenser" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>DYSTRYBUTORY</Link>
      <Link href="/" className='text-2xl basis-40 text-center font-bold hover:text-nlila hover:scale-105 transition-all'>NCOFFEE</Link>
      <Link href="/aboutus" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>O NAS</Link>
      <Link href="/clients" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>KLIENCI</Link>
      <Link href="/contact" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>KONTAKT</Link>
      </div>
      </header>
  )
}

 