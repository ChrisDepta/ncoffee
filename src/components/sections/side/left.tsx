import React from 'react'
import Image from 'next/image'

type Props = {
  id: number,
  title: string,
  par1: string,
  subtitle: string,
  li1: string,
  li2: string,
  li3: string,
  price: string,
  value: number,
  picture: string
}

export default function CoffeeLeft({id, title, par1, subtitle, li1, li2, li3, price, value, picture}: Props) {
  return (
        <div key={id} className='w-3/4 flex items-start mt-36 text-nbaige text-xl font-bold'>
          <div className='basis-1/2 flex flex-col justify-start items-center'>
            <h1 className='text-5xl uppercase font-extrabold my-16'>{title}</h1>
            <Image src={require(`@/../public/${picture}.webp`)} width={250} height={200} className='' alt={picture}/>
          </div>
          <div className='basis-1/2 mt-24'>
            <p className='text-right my-4'>{par1}</p>
            <p className='text-right text-3xl capitalize mt-5'>{subtitle}</p>
            <ul className='mt-1 text-right capitalize'>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            </ul>
            <p className='text-2xl mt-5 text-right'>
            {price} <strong className='text-3xl'>{value}</strong><strong>zł.</strong>
            </p>
              </div>
        </div>
  )
}