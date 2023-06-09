import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='bg-gradient-to-br from-nbaige via-white to-nblue'>
        <div className="homePageLogo w-screen flex items-center justify-center  ">
          <main className='h-screen w-10/12 flex items-center justify-around '>
            <Link href="coffee" className='basis-2/5 h-screen hover:bg-black/40'/>
            <Link href="water" className='basis-2/5 h-screen hover:bg-black/40'/>
          </main>
        </div>
      </div>
  )
}
