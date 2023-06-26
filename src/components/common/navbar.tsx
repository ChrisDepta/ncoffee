import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import depidevLogo from "../../../public/depidevLogoDark.webp"

function Navbar() {
  return (
    <header className='backdrop-blur-xl fixed top-0 z-20 w-screen bg-black/50 h-20 flex items-center justify-center '>
      <div className=' w-3/4 flex justify-evenly items-center text-m text-nbaige pt-2 tracking-wider'>
      <Link href="/coffee" className='basis-20 text-center'>KAWA</Link>
      <Link href="/ekspres" className='basis-20 text-center'>EKSPRESY</Link>
      <Link href="/chemistry" className='basis-20 text-center'>CHEMIA</Link>
      <Link href="/" className='text-2xl basis-40 text-center font-bold'>N COFFEE</Link>
      <Link href="/contact" className='basis-20 text-center'>KONTAKT</Link>
      <Link href="/clients" className='basis-20 text-center'>KLIENCI</Link>
      <Link href="/login" className='basis-20 text-center'>LOGIN</Link>
      </div>
      </header>
  )
}

export default Navbar