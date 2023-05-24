import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import ncoffeeWhite  from "../../public/ncoffeeWhite.webp"
import ncoffeeBlue  from "../../public/ncoffeeBlue.webp"
import ncoffeeBraun  from "../../public/ncoffeeBraun.webp"

export default function Home() {
  return (
    <div className="homePage w-screen flex items-center justify-center ">
      <main className='h-screen w-10/12 flex items-center justify-evenly'>
        <div className='front flex flex-col bg-white p-24 items-center justify-center basis-1/6 drop-shadow-2xl rounded-xl'>
          <Image src={ncoffeeBraun} alt="Kawa" width={300} height={300} className='basis-2/3' />
          <h1 className='mt-24 text-6xl text-yellow-950 font-bold '>Kawa</h1>
         </div>
        {/*<div className='flex flex-col hover:scale-110 transition-all bg-white p-24 items-center justify-center basis-1/6 drop-shadow-2xl rounded-xl'>
          <Image src={ncoffeeBlue} alt="Woda" width={300} height={300} className='basis-2/3' />
          <h1 className='mt-24 text-6xl text-[#144271] font-bold '>Woda</h1>
        </div> */}

        <div className='flex h-auto flex-col justify-center bg-transparent'>
          <div className='group h-96 w-96 [perspective:1000px]'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='absolute inset-0'>
                <Image src={ncoffeeBlue} alt="Woda" width={200} height={300} className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' />
              </div>
              <div className='absolute inset-0 h-full w-full rounded-xl bg-yellow-100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <Image src={ncoffeeBraun} alt="Woda" width={200} height={300} className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' />
              </div>
            </div>
          </div>
        </div>
      {/* <h1 className=' basis-full bg-[#f1cda19a] px-6 py-2 rounded-xl text-5xl text-yellow-950 font-bold my-24 border-2 border-[#f1cda1] drop-shadow-2xl'>+48 511 388 765</h1> */}
      </main>
    </div>
  )
}
