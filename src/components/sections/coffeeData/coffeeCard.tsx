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
  value: string,
  picture: string
}

export default function coffeeCard({id, title, par1, subtitle, li1, li2, li3, price, value, picture}: Props) {
  return (
    <div key={id} className='h-[100svh] md:h-auto bg-gradient-to-br from-nbeige/70 to-white md:mt-32 border-none md:border-0 border-nturkis rounded-none md:rounded-xl shadow-none md:shadow-2xl basis-full md:basis-auto flex flex-col justify-center items-center text-xl font-bold'>
          <div className=' basis-full w-[80%] md:w-64 flex flex-col justify-end items-center p-0 md:p-6 '>
            <p className='block md:hidden text-2xl text-norange uppercase font-extrabold mb-16'>{title}</p>
            <Image src={require(`@/../public/coffees/${picture}.webp`)} width={800} height={800} className='h-[70svh] md:h-56 w-auto hover:scale-110 transition' alt={picture} />
          </div>
          <div className='basis-auto w-full bg-white rounded-none md:rounded-b-xl flex flex-col justify-end items-center'>
            <p className='hidden md:block text-2xl text-norange uppercase font-extrabold m-4'>{title}</p>
            <p className='hidden md:block capitalize mb-4'>{subtitle}</p>
          </div>
        </div>
    // <div key={id} className=' h-auto basis-96 bg-gradient-to-br from-nbeige to-white p-8 mx-16 mt-32 border-0 border-nturkis rounded-xl shadow-2xl flex flex-wrap justify-between items-end text-xl font-bold'>

    //   <p className='basis-auto text-2xl uppercase font-extrabold mb-6 text-nbraun'>{title}</p>
    //   <div className='basis-1/2 '>
    //     <p className='text-left my-4 hidden'>{par1}</p>
    //     <p className='text-left text-xl capitalize mt-5'>{subtitle}</p>
    //     <ul className='mt-1 text-left capitalize'>
    //       <li>{li1}</li>
    //       <li>{li2}</li>
    //       <li>{li3}</li>
    //     </ul>
    //     <p className='text-xl mt-5 text-left'>
    //       {price} <strong className='text-2xl text-nbraun'>{value}</strong><strong>zł.</strong>
    //     </p>
    //   </div>
    //   <div className='basis-2/5 flex flex-col justify-end items-end'>
    //     <Image src={require(`@/../public/${picture}.webp`)} width={200} height={200} className='hover:scale-110 transition' alt={picture}/>
    //   </div>
    // </div>
  )
}

          
  