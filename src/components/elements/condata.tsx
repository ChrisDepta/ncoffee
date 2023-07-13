import React from "react";
import Image from "next/image";
import logoBaige from "@/../public/logoBaige.webp"

export default function Condata() {
        return(
        <div className='basis-1/3 h-screen flex flex-col items-start justify-center text-nbraun'>
        <p className='mt-24 mb-2 text-5xl font-extrabold'>KONTAKT</p>
        <p className='text-3xl font-bold'>N COFFEE</p>
        <strong className='text-2xl pt-12'>Biuro</strong>
        <p className='py-6 text-xl'>ul. Sowiogórska 8c/6 <br />
            58-200 Dzierżoniów
        </p>
        <p className='py-6 text-xl border-t border-b border-nbaige'>ING BANK ŚLĄSKI 77 1050 1908 1000 0091 2845 0997 <br />
            NIP: 882 210 61 83
        </p>

        <p className='py-6 text-xl'>
           <aside className='text-2xl pb-6 font-bold'>Zadzwoń lub napisz</aside>
            +48 511 388 765 <br />
            biuro.ncoffee@gmail.com
        </p>
        <Image src={logoBaige} width={300} height={300} className='w-1/3 ml-24 mt-12' alt={'N-COFFEE'}/>
      </div>
        )
}