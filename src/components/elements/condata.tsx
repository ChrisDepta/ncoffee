import React from "react";

export default function Condata() {
    const phoneNumber = "+48511388765";
    const emailAddress = "biuro.ncoffee@gmail.com";

    return (
        <div className=' xs:w-screen lg:w-1/4 mt-36 pr-8 xs:mr-0 md:mr-10 flex flex-col xs:items-center lg:items-start justify-center xs:border-r-none lg:border-r border-norange'>
            <p className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-norange'>NCOFFEE</p>
            <strong className='text-xl pt-8'>Biuro</strong>
            <p className='py-6 text-lg'>ul. Sowiogórska<br />
                58-200 Dzierżoniów
            </p>
            <p className='py-6 text-lg border-t border-b border-norange'>ING BANK ŚLĄSKI <br/>77 1050 1908 1000 0091 2845 0997 <br />
                NIP: 882 210 61 83
            </p>

            <div className='py-6 text-lg'>
                <p className='text-xl pb-6 font-bold'>Zadzwoń lub napisz</p>
                <a href={`tel:${phoneNumber}`}>+48 511 388 765</a> <br />
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </div>
        </div>
    );
}
