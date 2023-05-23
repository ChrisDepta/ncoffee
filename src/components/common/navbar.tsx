import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import depidevLogo from "../../../public/depidevLogoDark.webp"

function Navbar() {
  return (
    <nav className='z-10 fixed w-screen mx-auto flex items-center justify-center text-yellow-950'>
        <ul className='flex justify-evenly mt-4 w-screen text-4xl font-extrabold'>
          <li>
          <Link href="/kawa" className=' bg-[#f1cda19a] px-12 py-2 rounded-xl text-5xl text-yellow-950 font-bold my-24 border-2 border-[#f1cda1] drop-shadow-2xl'>Kawa</Link>
          </li>
          <li>
          <Link href="/woda " className='bg-[#f1cda19a] px-6 py-2 rounded-xl text-5xl text-yellow-950 font-bold my-24 border-2 border-[#f1cda1] drop-shadow-2xl'>Woda</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar