import React from 'react';
import data from '@/data/db.json';
import Right from '../side/machineRight';
import Left from '../side/machineLeft';

export default function About() {
  const { machines } = data;

  return (
    <>
      {machines.map(machine => {
        const isEven = machine.id % 2 === 0;
        const Component = isEven ? Right : Left;
        return <Component key={machine.id} {...machine} />;
      })}
    </>
  );
}
