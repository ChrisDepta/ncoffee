import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-nbluehome'>
        <div className="homePageLogoVertical sm:homePageLogoHorizontal w-screen flex items-center justify-center  ">
          <main className=' z-20 h-screen w-10/12 flex xs:flex-col md:flex-row xs:items-center xs:justify-between md:items-end md:justify-around '>
            <Link href="water" className='xs:text-4xl md:text-7xl tracking-wider text-white font-black xs:m-12 md:m-24 hover:scale-110 transition' >woda</Link>
            <Link href="coffee" className='xs:text-4xl  md:text-7xl tracking-wider text-white font-black xs:m-12 md:m-24 hover:scale-110 transition'>kawa</Link>
          </main>
        </div>
      </div>
  )
}
