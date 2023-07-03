import React from 'react';
import data from '@/data/db.json';
import Right from '../side/right';
import Left from '../side/left';

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
