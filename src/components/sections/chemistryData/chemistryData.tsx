import React from 'react';
import data from '@/data/db.json';
import Card from '@/components/elements/card';

export default function ChemistryData() {
  const { chemistries, filters } = data;

  return (
    <div className='z-10 mt-[70vh] bg-white flex flex-col justify-start items-center w-full'>
    <div className='pt-12 flex flex-col justify-start items-start w-[70%]'>
    <p className='text-5xl font-extrabold tracking-wider text-norange'>Środki czyszczące</p>
    <div className='overflow-x-hidden gap-8 flex flex-wrap justify-center pb-32 p-12'>
      {chemistries.map(chemistry => {
       const Component = Card;
       return <Component key={chemistry.id} {...chemistry} />;
      })}
    </div>
    <p className='text-5xl font-extrabold tracking-wider text-norange'>Filtry</p>
    <div className='overflow-x-hidden gap-8 flex flex-wrap justify-center pb-32 p-12'>
      {filters.map(filter => {
        const Component = Card;
        return <Component key={filter.id} {...filter} />;
      })}
    </div>
    </div>
    </div>
  );
}
