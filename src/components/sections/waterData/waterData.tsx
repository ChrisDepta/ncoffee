import React from 'react';
import data from '@/data/db.json';
import Card from '@/components/elements/card';

export default function WaterData() {
  const { houseWaters, gourmetWaters } = data;

  return (
    <div className='z-10 mt-[70vh] bg-white flex flex-col justify-start items-center w-full'>
    <div className='pt-12 flex flex-col justify-start items-start w-[70%]'>
    <p className='pl-12 text-5xl font-extrabold tracking-wider text-nturkis'>Woda dla każdego</p>
    <div className='overflow-x-hidden gap-8 flex flex-wrap justify-start pb-32 p-12'>
      {houseWaters.map(water => {
        const Component = Card;
        return <Component key={water.id} {...water} />;
      })}
    </div>
    <p className='pl-12 text-5xl font-extrabold tracking-wider text-nturkis'>Woda Premium dla Gastronomii</p>
    <div className='overflow-x-hidden gap-8 flex flex-wrap justify-center pb-32 p-12'>
      {gourmetWaters.map(water => {
        const Component = Card;
        return <Component key={water.id} {...water} />;
      })}
    </div>
    </div>
    </div>
  );
}
