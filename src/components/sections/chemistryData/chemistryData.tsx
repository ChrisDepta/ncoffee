import React from 'react';
import data from '@/data/db.json';
import Card from './chemistryCard';

export default function ChemistryData() {
  const { chemistries } = data;

  return (
    <div className='flex flex-wrap justify-around mx-32 pb-32'>
      {chemistries.map(chemistry => {
        const Component = Card;
        return <Component key={chemistry.id} {...chemistry} />;
      })}
    </div>
  );
}
