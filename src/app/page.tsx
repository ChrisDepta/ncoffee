import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-nbluehome'>
        <div className="homePageLogoVertical md:homePageLogoHorizontal w-screen flex items-center justify-center  ">
          <main className='h-screen w-10/12 flex items-end justify-around '>
            <Link href="water" className='text-7xl tracking-wider text-white font-black m-24 hover:scale-110 transition' >woda</Link>
            <Link href="coffee" className=' text-7xl tracking-wider text-white font-black m-24 hover:scale-110 transition'>kawa</Link>
          </main>
        </div>
      </div>
  )
}
