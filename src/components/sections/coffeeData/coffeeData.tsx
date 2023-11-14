import React from 'react';
import data from '@/data/db.json';
import Right from '../side/coffeeRight';
import Left from '../side/coffeeLeft';

export default function About() {
  const { coffees } = data;

  return (
    <>
      {coffees.map(coffee => {
        const isEven = coffee.id % 2 === 0;
        const Component = isEven ? Right : Left;
        return <Component key={coffee.id} {...coffee} />;
      })}
    </>
  );
}
