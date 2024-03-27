import React from 'react';
import data from '@/data/db.json';
import Card from '@/components/elements/card';

interface DataPageProps {
    articles: any;
  }

export default function DataPage({ articles }: DataPageProps) {

  return (
    <div className='z-10 bg-white flex flex-col justify-start items-center w-full pb-32'>
    <div className='pt-12 flex flex-col justify-start items-center md:items-start w-full md:w-[80%]'>
    <p className='my-12 md:my-0 md:px-12 text-3xl md:text-5xl font-extrabold tracking-wider text-black'>Podobne produkty</p>
    <div className='overflow-x-hidden gap-0 md:gap-8 flex flex-wrap justify-start items-start md:px-12'>
      {articles.map((item: React.JSX.IntrinsicAttributes & { id: number; title: string; par1: string; subtitle: string; li1: string; li2: string; li3: string; price: string; value: string; picture1: string; picture2: string; picture3: string; picture4: string; path: string; technical: string; waterContainer: string; coffeeContainer: string; groundsContainer: string; power: string; height: string; witdh: string; depth: string; weight: string; folderName: string; }) => {
        const Component = Card;
        return <Component key={item.id} {...item} />;
      })}
    </div>
    </div>
    </div>
  );
}
