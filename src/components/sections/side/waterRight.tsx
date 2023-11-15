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

export default function waterRight({id, title, subtitle, li1, li2, li3, price, picture}: Props) {
  return (
    <div key={id} className=' h-96 bg-gradient-to-br from-nturkis/20 to-white p-12 mx-16 mt-32 border-0 border-nturkis rounded-xl shadow-2xl basis-80 flex justify-end items-end text-nbaige text-xl font-bold'>
          <div className='basis-4/5 '>
            <p className='text-2xl uppercase font-extrabold mb-8'>{title}</p>
            <p className='text-left my-4'>{}</p>
            <p className='text-left capitalize mt-5'>{subtitle}</p>
            <ul className='mt-1 text-left'>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            </ul>
            <p className='text-2xl mt-5 text-left'>
            Cena: <strong className='text-2xl'>{price}</strong>
            </p>
          </div>
          <div className=' basis-1/6 '>
            <Image src={require(`@/../public/${picture}.webp`)} width={50} height={100} className='hover:scale-125 transition' alt={picture} />
          </div>
        </div>
  )
}