import React from 'react'
import Image from 'next/image'
import data from '@/data/db.json';
import PatternBrown from '@/../public/patternBrown.webp'

type Props = {}

export default function AboutTwo({}: Props) {

  const { about } = data;

  return (
        <div className='w-screen flex flex-col justify-start items-center bg-nbaige text-nbraun text-xl font-bold'>
          <Image src={PatternBrown} className='w-screen ' alt={'logoBaige'}/>
          <p className='w-1/2 text-center my-36' key={about[2].id}>{about[2].text}</p>
        </div>
  )
}