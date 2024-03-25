import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id: number,
  title: string,
  par1: string,
  subtitle: string,
  li1: string,
  li2: string,
  li3: string,
  price: string,
  value: string,
  picture: string,
  path: string
}

export default function coffeeCard(this: any, {id, path, title, par1, subtitle, li1, li2, li3, price, value, picture}: Props) {
  return (
    <div key={id} className='h-[100svh] md:h-auto bg-gradient-to-br from-nbeige/70 to-white md:mt-32 border-none md:border-0 border-nturkis rounded-none md:rounded-xl shadow-none md:shadow-2xl basis-full md:basis:auto flex flex-col justify-center items-center text-xl font-bold'>
          <div className=' basis-full w-[80%] md:w-64 flex justify-center items-end p-0 md:p-6 '>
            <Image src={require(`@/../public/coffees/${picture}.webp`)} width={800} height={800} className='h-auto md:h-56 w-auto hover:scale-110 transition' alt={picture} />
          </div>
          <div className='basis-auto w-full bg-white rounded-none md:rounded-b-xl flex flex-col justify-end items-center'>
          <Link href={`/products/${path}`}><p className='text-2xl text-norange uppercase font-extrabold m-4'>{title}</p></Link>
            <p className='hidden md:block capitalize mb-4'>{subtitle}</p>
          </div>
        </div>
  )
}