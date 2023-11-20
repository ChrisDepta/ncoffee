import React from 'react';
import data from '@/data/db.json';
import Card from './machineCard';

export default function MachineData() {
  const { machines } = data;

  return (
    <div className='flex flex-wrap justify-around mx-32 pb-32'>
      {machines.map(machine => {
        const Component = Card;
        return <Component key={machine.id} {...machine} />;
      })}
    </div>
  );
}
