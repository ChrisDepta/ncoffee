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

export default function chemistryLeft({id, title, par1, subtitle, li1, li2, li3, price, value, picture}: Props) {
  return (
        <div key={id} className='w-3/5 flex items-end justify-around mt-24 text-nbaige text-xl'>
          <div className=' my-12 basis-1/3 flex flex-col justify-start items-start'>
            <Image src={require(`@/../public/${picture}.webp`)} width={200} height={200} className='' alt={picture}/>
          </div>
          <div className='basis-1/2 my-12'>
            <p className='text-5xl uppercase font-extrabold mb-16 text-right'>{title}</p>
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