import React from 'react'
import Image from 'next/image'

type Props = {
  id: number,
  title: string,
  subtitle: string,
  li1: string,
  li2: string,
  li3: string,
  price: string,
  picture: string
}

export default function WaterCard({id, title, subtitle, li1, li2, li3, price, picture}: Props) {
  return (
    <div key={id} className=' h-auto bg-gradient-to-br from-nturkis/20 to-gray-100 mt-32 border-0 border-nturkis rounded-xl shadow-2xl basis-auto flex flex-col justify-center items-center text-xl font-bold'>
          <div className=' basis-full  w-full flex justify-center items-end p-6 '>
            <Image src={require(`@/../public/${picture}.webp`)} width={50} height={100} className='hover:scale-125 transition' alt={picture} />
          </div>
          <div className='basis-auto w-full bg-white rounded-b-xl flex flex-col justify-end items-center'>
            <p className='text-xl text-nturkis uppercase font-extrabold m-4'>{title}</p>
            <p className='capitalize mb-4'>{subtitle}</p>
          </div>
        </div>
  )
}