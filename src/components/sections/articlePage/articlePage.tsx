import React from 'react';
import data from '@/data/db.json';

interface Props {
    id?: number;
    title?: string;
    par1?: string; // Make optional
    subtitle?: string; // Make optional
    li1?: string; // Make optional
    li2?: string; // Make optional
    li3?: string; // Make optional
    price?: string; // Make optional
    value?: string; // Make optional
    picture?: string;
    path?: string; // Make optional
  }

export default function articlePage(this: any, {id, path, title, par1, subtitle, li1, li2, li3, price, value, picture}: Props) {
  

  return (
    <div className='z-10 bg-white flex flex-col justify-start items-center w-full'>
    <p className='mt-32 text-5xl'>{title}</p>
    <p className='mt-32 text-5xl'>{path}</p>
    <p className='mt-32 text-5xl'>{id}</p>
    <p className='mt-32 text-5xl'>{par1}</p>
    <p className='mt-32 text-5xl'>{subtitle}</p>
    <p className='mt-32 text-5xl'>{li1}</p>
    <p className='mt-32 text-5xl'>{price}</p>
    <p className='mt-32 text-5xl'>{value}</p>
    </div>
  );
}