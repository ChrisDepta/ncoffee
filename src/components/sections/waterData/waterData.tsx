import React from 'react';
import data from '@/data/db.json';
import Right from '../side/waterRight';

export default function About() {
  const { waters } = data;

  return (
    <>
      {waters.map(water => {
        const Component = Right;
        return <Component key={water.id} {...water} />;
      })}
    </>
  );
}
