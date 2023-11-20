import React from 'react';
import data from '@/data/db.json';
import Card from './coffeeCard';

export default function CoffeeData() {
  const { coffees } = data;

  return (
    <div className='flex flex-wrap justify-around mx-32 pb-32'>
      {coffees.map(coffee => {
        const Component = Card;
        return <Component key={coffee.id} {...coffee} />;
      })}
    </div>
  );
}
