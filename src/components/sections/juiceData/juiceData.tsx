import React from 'react';
import data from '@/data/db.json';
import Card from './juiceCard';

export default function JuiceData() {
  const { juices } = data;

  return (
    <div className='flex flex-wrap justify-around mx-32 pb-32'>
      {juices.map(juice => {
        const Component = Card;
        return <Component key={juice.id} {...juice} />;
      })}
    </div>
  );
}
