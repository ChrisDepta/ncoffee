import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-nbluehome'>
        <div className="homePageLogo w-screen flex items-center justify-center  ">
          <main className='h-screen w-10/12 flex items-end justify-around '>
            <Link href="water" className='text-7xl m-24 hover:scale-110 transition'>WODA</Link>
            <Link href="coffee" className='text-7xl m-24 hover:scale-110 transition'>KAWA</Link>
          </main>
        </div>
      </div>
  )
}
