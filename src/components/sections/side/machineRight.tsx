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
  waterContainer: string,
  coffeeContainer: string,
  groundsContainer: string,
  power: string,
  height: string,
  width: string,
  weight: string,
  depth: string
}

export default function machineRight({id, title, subtitle, li1, li2, li3, price, picture, characteristic, waterContainer, groundsContainer, coffeeContainer, power, weight, width, height, depth}: Props) {
  return (
    <div key={id} className=' mt-24 w-2/3 flex items-start text-nbaige text-xl'>
          <div className='basis-1/2 my-12'>
            <p className='text-5xl uppercase font-extrabold mb-6'>{title}</p>
            <p className='text-3xl text-left mb-4'>{subtitle}</p>
            <p className='text-left text-xl capitalize'>{characteristic}</p>
            <ul className='mt-4 text-2xl text-left capitalize'>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            </ul>
            <p className='text-2xl mt-5 text-left'>
            Cena: <strong className='text-3xl'>{price}</strong><strong></strong>
            </p>
          </div>
          <div className='my-12 basis-1/2 flex flex-col justify-start items-end'>
            <Image src={require(`@/../public/${picture}.webp`)} width={300} height={200} className='' alt={picture}/>
          </div>
        </div>
  )
}