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

export default function chemistryRight({id, title, par1, subtitle, li1, li2, li3, price, value, picture}: Props) {
  return (
    <div key={id} className=' mt-24 w-3/5 flex items-end text-nbaige text-xl font-bold'>
          <div className='basis-1/2 my-12'>
            <p className='text-5xl uppercase font-extrabold mb-16'>{title}</p>
            <p className='text-left my-4'>{par1}</p>
            <p className='text-left text-3xl capitalize mt-5'>{subtitle}</p>
            <ul className='mt-1 text-left capitalize'>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            </ul>
            <p className='text-2xl mt-5 text-left'>
            {price} <strong className='text-3xl'>{value}</strong><strong>zł.</strong>
            </p>
          </div>
          <div className='my-12 basis-1/2 flex flex-col justify-start items-end'>
            <Image src={require(`@/../public/${picture}.webp`)} width={200} height={200} className='' alt={picture}/>
          </div>
        </div>
  )
}