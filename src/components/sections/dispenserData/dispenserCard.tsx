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
  picture: string,
  characteristic: string,
  value: number
}

export default function DispenserCard({id, title, subtitle, li1, li2, li3, price, value, picture, characteristic}: Props) {
  return (
    <div key={id} className=' h-auto basis-96 bg-gradient-to-bl from-nturkis/20 via-nturkis/5 to-nturkis/50 p-8 mx-16 mt-32 border-0 border-nturkis rounded-xl shadow-2xl flex flex-wrap justify-between items-end text-xl font-bold'>
      <p className='basis-full text-2xl uppercase font-extrabold mb-6 text-nturkis'>{title}</p>
      <div className='basis-1/2 '>
        <p className='text-left my-4 hidden'>{characteristic}</p>
        <p className='text-left text-xl capitalize mt-5'>{subtitle}</p>
        <ul className='mt-1 text-left capitalize'>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>
        <p className='text-xl mt-5 text-left '>
          {price} <strong className='text-2xl text-nturkis'>{value}</strong><strong> zł.</strong>
        </p>
      </div>
      <div className='basis-2/5 flex flex-col justify-end items-end'>
        <Image src={require(`@/../public/${picture}.webp`)} width={100} height={200} className='hover:scale-110 transition' alt={picture}/>
      </div>
    </div>
  )
}