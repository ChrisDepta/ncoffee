import React from 'react';
import data from '@/data/db.json';
import Right from '../side/waterRight';
import Left from '../side/waterLeft';

export default function About() {
  const { waters } = data;

  return (
    <>
      {waters.map(water => {
        const isEven = water.id % 2 === 0;
        const Component = isEven ? Right : Left;
        return <Component key={water.id} {...water} />;
      })}
    </>
  );
}
