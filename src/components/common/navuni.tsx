import React from 'react'
import Link from 'next/link'


export default function NavUni() {
  return (
    <header className='backdrop-blur-xl fixed top-0 z-20 w-screen bg-black/50 h-20 flex items-center justify-center '>
      <div className=' w-3/4 flex justify-evenly items-center text-m text-nbaige tracking-wider'>
      <Link href="/water" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>WODA</Link>
      <Link href="/coffee" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>KAWA</Link>
      <Link href="/" className='text-2xl basis-40 text-center font-bold hover:text-nlila hover:scale-105 transition-all'>N COFFEE</Link>
      <Link href="/contact" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>KONTAKT</Link>
      <Link href="/clients" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>KLIENCI</Link>
      <Link href="/aboutus" className='basis-20 text-center hover:text-nlila hover:scale-105 transition-all'>O NAS</Link>
      </div>
      </header>
  )
}

 