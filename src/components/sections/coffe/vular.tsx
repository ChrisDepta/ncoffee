import React from 'react'
import Image from 'next/image'
import logoBaige from "@/../public/logoBaige.webp"

type Props = {}

export default function Vular({}: Props) {
  return (
        <div className='w-3/4 flex items-start mt-36 text-nbaige text-xl font-bold'>
          <div className='basis-1/2 flex flex-col justify-start items-start'>
            <h1 className='text-7xl'>VULAR</h1>
            <Image src={logoBaige} width={400} height={200} className='' alt={'logoBaige'}/>
          </div>
          <div className='basis-1/2 mt-24'>
            <p className='text-right my-4'>Od kilku lat zajmujemy się profesjonalnie obsługą klientów biznesowych i indywidualnych. 
              Zaopatrujemy Was w najlepszą na rynku kawę, niezawodne ekspresy oraz chemię do konserwacji
              ekspresów.
            </p>
            <p className='text-right'>Słuchamy potrzeb i doradzamy, jak wybrać najlepszą kawę i ekspres. Budujemy relacje, spełniamy
              oczekiwania, i nie zotawiamy naszych klientów w potrzebie - zawsze zapewniamy profesjonalny serwis.
            </p>
          </div>
        </div>
  )
}