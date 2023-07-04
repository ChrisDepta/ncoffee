import React from 'react'
import Image from 'next/image'
import logoBaige from "@/../public/logoBaige.webp"
import data from '@/data/db.json';

type Props = {}

export default function AboutOne({}: Props) {

  const { about } = data;

  return (
        <div className='w-4/5 flex flex-col justify-start items-center text-nbaige text-xl font-bold pb-24'>
          <Image src={logoBaige} width={200} height={200} className='w-50 mt-36 ' alt={'logoBaige'}/>
          <p className='w-1/2 text-center mt-12' key={about[0].id}>{about[0].text}</p>
          <p className='w-1/2 text-center mt-12' key={about[1].id}>{about[1].text}</p>
        </div>
  )
}