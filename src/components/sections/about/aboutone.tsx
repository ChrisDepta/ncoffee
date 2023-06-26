import React from 'react'
import Image from 'next/image'
import logoBaige from "@/../public/logoBaige.webp"

type Props = {}

export default function AboutOne({}: Props) {
  return (
        <div className='w-4/5 flex flex-col justify-start items-center text-nbaige text-xl font-bold'>
          <Image src={logoBaige} width={200} height={200} className='w-50 mt-36 ' alt={'logoBaige'}/>
          <p className='w-1/2 text-center my-4'>Od kilku lat zajmujemy się profesjonalnie obsługą klientów biznesowych i indywidualnych. 
            Zaopatrujemy Was w najlepszą na rynku kawę, niezawodne ekspresy oraz chemię do konserwacji
            ekspresów.
          </p>
          <p className='w-1/2 text-center'>Słuchamy potrzeb i doradzamy, jak wybrać najlepszą kawę i ekspres. Budujemy relacje, spełniamy
            oczekiwania, i nie zotawiamy naszych klientów w potrzebie - zawsze zapewniamy profesjonalny serwis.
          </p>
        </div>
  )
}