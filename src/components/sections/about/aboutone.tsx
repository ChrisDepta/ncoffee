import React from 'react'
import Image from 'next/image'
import logoBaige from "@/../public/logoBaige.webp"
import data from '@/data/db.json';

type Props = {}

export default function AboutOne({}: Props) {

  const { about } = data;

  return (
        <div className='w-4/5 flex flex-col justify-start items-center text-nbaige text-xl font-bold'>
          <Image src={logoBaige} width={200} height={200} className='w-50 mt-36 ' alt={'logoBaige'}/>
          {about.map(ab => <p className='w-1/2 text-center my-4' key={ab.id}>{ab.text}</p>)}
        </div>
  )
}