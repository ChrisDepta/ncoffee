import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from "./button"

function CardWater() {
    return (
        <div className='flex h-1/2 w-1/5 flex-col justify-center bg-transparent cursor-pointer'>
        <div className='group h-full w-full [perspective:1000px]'>
          <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='absolute inset-0'>
              {/* <Image src={} alt="Woda" width={200} height={300} className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' /> */}
              <div className='z-10 absolute top-10 bg-white/40 w-full'> 
               <h1 className='text-6xl text-center text-black font-extrabold '>Woda</h1>
              </div>
            </div>
            <Link href="/water" className='z-20 absolute inset-0 h-full w-full rounded-xl bg-white px-12 pt-16 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              {/* <Image src={} alt="Woda" width={150} height={300} className='h-auto w-auto rounded-xl object-cover ' /> */}
              <Button />
            </Link>
          </div>
        </div>
      </div>
    )
  }

export default CardWater