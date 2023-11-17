import React from 'react';
import data from '@/data/db.json';
import Card from './waterCard';

export default function About() {
  const { waters } = data;

  return (
    <div className='flex flex-wrap justify-around mx-32 pb-32'>
      {waters.map(water => {
        const Component = Card;
        return <Component key={water.id} {...water} />;
      })}
    </div>
  );
}
