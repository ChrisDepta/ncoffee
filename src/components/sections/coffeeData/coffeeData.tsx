import React from 'react';
import data from '@/data/db.json';
import Card from './coffeeCard';

export default function CoffeeData() {
  const { coffees } = data;

  return (
    <div className='w-full z-10 mt-[100vh] overflow-x-hidden gap-6 px-32 bg-white flex flex-wrap justify-center pb-32'>
      {coffees.map(coffee => {
        const Component = Card;
        return <Component key={coffee.id} {...coffee} />;
      })}
    </div>
  );
}
