'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Props {
  id: number;
  title: string;
  par1?: string;
  subtitle?: string;
  li1?: string;
  li2?: string;
  li3?: string;
  price?: string;
  value?: string;
  picture1: string;
  picture2: string;
  picture3: string;
  picture4: string;
  path: string;
  folderName?: string;
}

export default function ArticlePage({ id, folderName = '', path, title, par1, subtitle, li1, li2, li3, price, value, picture1, picture2, picture3, picture4 }: Props) {
  // Ustaw początkowy obraz na picture1
  const [activePicture, setActivePicture] = useState(picture1);
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (activeModal) {
      // Dodaj styl blokujący scroll do <body> gdy modal jest aktywny
      document.body.style.overflow = 'hidden';
    } else {
      // Usuń styl blokujący scroll, gdy modal jest zamknięty
      document.body.style.overflow = '';
    }
  }, [activeModal]); 
  // Funkcja do zmiany aktywnego obrazu
  const changePicture = (pictureName: string) => () => {
    setActivePicture(pictureName);
  };

  const openModal = (bool: boolean) => () => {
    setActiveModal(true);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <div className='z-40 bg-white flex justify-center items-center w-full min-h-[100vh] mb-[70svh]'>
    <div className=' flex justify-center items-start '>
      <div className='basis-1/12 max-h-[30vw] flex flex-col justify-start items-center gap-12 mr-12 overflow-y-scroll custom-scroll'>
        <Image onClick={changePicture(picture1)} src={require(`@/../public/${folderName}/${picture1}.webp`)} alt="title" width={100} height={200} className=' bg-black/10 p-2 hover:scale-105 transition-all' />
        {picture2 !== "" && <Image onClick={changePicture(picture2)} src={require(`@/../public/${folderName}/${picture2}.webp`)} alt="title" width={100} height={200} className=' bg-black/10 p-2 hover:scale-105 transition-all' />}
        {picture3 !== "" && <Image onClick={changePicture(picture3)} src={require(`@/../public/${folderName}/${picture3}.webp`)} alt="title" width={100} height={200} className=' bg-black/10 p-2 hover:scale-105 transition-all' />}
        {picture4 !== "" && <Image onClick={changePicture(picture4)} src={require(`@/../public/${folderName}/${picture4}.webp`)} alt="title" width={100} height={200} className=' bg-black/10 p-2 hover:scale-105 transition-all' />}
      </div>
      <div className='basis-[30vw] h-[30vw] bg-black/10 border flex items-center justify-center p-8 mr-12'>
        <Image onClick={openModal(true)} src={require(`@/../public/${folderName}/${activePicture}.webp`)} alt="title" width={300} height={200} className='h-full w-auto ' />
        {activeModal && (
        <div className='fixed inset-0 bg-black bg-opacity-90 backdrop-blur flex justify-center items-center' onClick={closeModal}>
          <div className=' h-[90svh] mt-16 flex items-start gap-32' onClick={(e) => e.stopPropagation()}>
            <Image  src={require(`@/../public/${folderName}/${activePicture}.webp`)} alt="title" width={600} height={400} className='h-full w-auto' />
            <button onClick={closeModal} className='absolute top-20 right-6 p-4 rounded-full bg-norange w-auto flex justify-center items-center font-extrabold text-2xl text-white hover:scale-105 transition-all hover:bg-white hover:text-norange'>x</button>
          </div>
        </div>
      )}
      </div>
      <div className='basis-1/3 flex flex-col items-start justify-start'>
        <p className='text-5xl font-extrabold tracking-widest'>{title}</p>
        <p className='text-xl'>{folderName}</p>
        <p className='text-xl'>{activePicture}</p>
        <p className='text-xl'>{par1}</p>
        <p className='text-xl'>{subtitle}</p>
        <p className='text-xl'>{li1}</p>
        <p className='text-xl'>{price}</p>
        <p className='text-xl'>{value}</p>
      </div>
    </div>
    </div>
  );
}
