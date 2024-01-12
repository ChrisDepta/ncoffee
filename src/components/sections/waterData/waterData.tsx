import React from 'react';
import data from '@/data/db.json';
import Card from './waterCard';

export default function WaterData() {
  const { waters } = data;

  return (
    <div className='z-10 mt-[100vh] overflow-x-hidden bg-white flex flex-wrap justify-around pb-32'>
      {waters.map(water => {
        const Component = Card;
        return <Component key={water.id} {...water} />;
      })}
    </div>
  );
}
