import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './button'

function CardCoffe() {
    return (
        <div className='flex h-1/2 w-1/5 flex-col justify-center bg-transparent cursor-pointer'>
        <div className='group h-full w-full [perspective:1000px]'>
          <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='absolute inset-0'>
              {/* <Image src={} alt="Woda" width={200} height={300} className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' /> */}
              <div className='z-10 absolute top-10 bg-white/40 w-full'> 
               <p className='text-6xl text-center text-black font-extrabold '>Kawa</p>
              </div>
            </div>
            <Link href="/coffee" className='z-20 absolute inset-0 h-full w-full rounded-xl bg-white px-12 pt-16 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <p className='text-6xl text-black font-extrabold '>Kawa</p>
              <ul className='text-2xl text-black font-bold text-left m-5 mb-10 list-disc'>
                <li>Kawy</li>
                <li>Expresy</li>
                <li>Chemia</li>
              </ul>
              <Button />
            </Link>
          </div>
        </div>
      </div>
    )
  }

export default CardCoffe