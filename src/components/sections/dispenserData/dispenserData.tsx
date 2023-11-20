import React from 'react';
import data from '@/data/db.json';
import Card from './dispenserCard';

export default function DispenserData() {
  const { dispensers } = data;

  return (
    <div className='flex flex-wrap justify-around mx-32 pb-32'>
      {dispensers.map(dispenser => {
        const Component = Card;
        return <Component key={dispenser.id} {...dispenser} />;
      })}
    </div>
  );
}
