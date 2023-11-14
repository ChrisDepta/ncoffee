import React from 'react';
import data from '@/data/db.json';
import Right from '../side/chemistryRight';
import Left from '../side/chemistryLeft';

export default function About() {
  const { chemistries } = data;

  return (
    <>
      {chemistries.map(chemistry => {
        const isEven = chemistry.id % 2 === 0;
        const Component = isEven ? Right : Left;
        return <Component key={chemistry.id} {...chemistry} />;
      })}
    </>
  );
}
