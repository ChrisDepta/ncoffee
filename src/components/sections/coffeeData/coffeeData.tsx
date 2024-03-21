import React from 'react';
import data from '@/data/db.json';
import Card from './coffeeCard';

export default function CoffeeData() {
  const { artisanCoffees, gourmetCoffees } = data;

  return (
    <div className='z-10 mt-[70vh] bg-white flex flex-col justify-start items-center w-full'>
    <div className='pt-12 flex flex-col justify-start items-center md:items-start w-full md:w-[70%]'>
    <p className='my-12 md:my-0 text-3xl md:text-5xl font-extrabold tracking-wider text-norange'>Kawy rzemieślnicze</p>
    <div className='overflow-x-hidden gap-0 md:gap-8 flex flex-wrap justify-center pb-32 p-0 md:p-12'>
      {artisanCoffees.map(coffee => {
        const Component = Card;
        return <Component key={coffee.id} {...coffee} />;
      })}
    </div>
    <p className='my-12 md:my-0 text-3xl md:text-5xl font-extrabold tracking-wider text-norange'>Kawy gastronomiczne</p>
    <div className='overflow-x-hidden gap-0 md:gap-8 flex flex-wrap justify-center pb-32 p-0 md:p-12'>
      {gourmetCoffees.map(coffee => {
        const Component = Card;
        return <Component key={coffee.id} {...coffee} />;
      })}
    </div>
    </div>
    </div>
  );
}
