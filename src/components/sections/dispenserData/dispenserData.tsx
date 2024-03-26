import React from 'react';
import data from '@/data/db.json';
import Card from '@/components/elements/card';

export default function DispenserData() {
  const { bottledDispensers, networkDispensers } = data;

  return (
    // <div className='flex flex-wrap justify-around mx-32 pb-32'>
    //   {dispensers.map(dispenser => {
    //     const Component = Card;
    //     return <Component key={dispenser.id} {...dispenser} />;
    //   })}
    // </div>
    <div className='z-10 mt-[70vh] bg-white flex flex-col justify-start items-center w-full'>
    <div className='pt-12 flex flex-col justify-start items-start w-[70%]'>
    <p className='text-5xl font-extrabold tracking-wider text-nturkis'>Dystrybutory butlowe 19l</p>
    <div className='overflow-x-hidden gap-8 flex flex-wrap justify-center pb-32 p-12'>
      {bottledDispensers.map(dispenser => {
        const Component = Card;
        return <Component key={dispenser.id} {...dispenser} />;
      })}
    </div>
    <p className='text-5xl font-extrabold tracking-wider text-nturkis'>Dystrybutory sieciowe</p>
    <div className='overflow-x-hidden gap-8 flex flex-wrap justify-center pb-32 p-12'>
      {networkDispensers.map(dispenser => {
        const Component = Card;
        return <Component key={dispenser.id} {...dispenser} />;
      })}
    </div>
    </div>
    </div>
  );
}
