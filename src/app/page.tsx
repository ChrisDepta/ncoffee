import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import homeLogo  from "../../public/homeLogo.webp"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start ">
      <main className='h-screen flex flex-col items-center justify-end'>
      <Image src={homeLogo} alt="homeLogo" width={280} height={200} className='drop-shadow-2xl border-2 border-[#f1cda1] rounded-xl' />
      <h1 className=' bg-[#f1cda19a] px-6 py-2 rounded-xl text-5xl text-yellow-950 font-bold my-24 border-2 border-[#f1cda1] drop-shadow-2xl'>+48 511 388 765</h1>
      </main>
    </div>
  )
}
