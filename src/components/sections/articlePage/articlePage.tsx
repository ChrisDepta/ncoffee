"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Description from "@/components/elements/Description";

interface Props {
  id: number;
  title: string;
  par1?: string;
  subtitle?: string;
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  li5?: string;
  li6?: string;
  li7?: string;
  li8?: string;
  li9?: string;
  li10?: string;
  li11?: string;
  price?: string;
  value?: string;
  picture1: string;
  picture2: string;
  picture3: string;
  picture4: string;
  technical?: string;
  descriptions?: string;
  waterContainer?: string;
  coffeeContainer?: string;
  groundsContainer?: string;
  power?: string;
  height?: string;
  witdh?: string;
  depth?: string;
  weight?: string;
  path: string;
  folderName: string;
}

export default function ArticlePage({
  id,
  folderName,
  path,
  title,
  par1,
  subtitle,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
  li7,
  li8,
  li9,
  li10,
  li11,
  price,
  value,
  picture1,
  picture2,
  picture3,
  picture4,
  technical,
  descriptions,
  waterContainer,
  coffeeContainer,
  groundsContainer,
  power,
  height,
  witdh,
  depth,
  weight,
}: Props) {
  // Ustaw początkowy obraz na picture1
  const [activePicture, setActivePicture] = useState(picture1);
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (activeModal) {
      // Dodaj styl blokujący scroll do <body> gdy modal jest aktywny
      document.body.style.overflow = "hidden";
    } else {
      // Usuń styl blokujący scroll, gdy modal jest zamknięty
      document.body.style.overflow = "";
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
    <div className="z-40 bg-white flex justify-center items-center w-full min-h-[100vh]">
      <div className="mt-20 md:mt-0 flex flex-wrap md:flex-nowrap justify-center items-start ">
      {picture2 !== "" && (
        <div className=" scroll-smooth basis-screen md:basis-1/12 max-h-[30vw] flex flex-row md:flex-col justify-start items-center gap-12 mx-4 md:mx-0 mb-4 md:mr-12 overflow-y-scroll custom-scroll">
          <Image
            onClick={changePicture(picture1)}
            src={require(`@/../public/${folderName}/${picture1}.webp`)}
            alt="title"
            width={100}
            height={200}
            className=" bg-black/10 object-contain w-32 h-32 p-2 hover:scale-105 transition-all"
          />
          {picture2 !== "" && (
            <Image
              onClick={changePicture(picture2)}
              src={require(`@/../public/${folderName}/${picture2}.webp`)}
              alt="title"
              width={100}
              height={200}
              className=" bg-black/10 object-contain w-32 h-32 p-2 hover:scale-105 transition-all"
            />
          )}
          {picture3 !== "" && (
            <Image
              onClick={changePicture(picture3)}
              src={require(`@/../public/${folderName}/${picture3}.webp`)}
              alt="title"
              width={100}
              height={200}
              className=" bg-black/10 object-contain w-32 h-32 p-2 hover:scale-105 transition-all"
            />
          )}
          {picture4 !== "" && (
            <Image
              onClick={changePicture(picture4)}
              src={require(`@/../public/${folderName}/${picture4}.webp`)}
              alt="title"
              width={100}
              height={200}
              className=" bg-black/10 object-contain w-32 h-32 p-2 hover:scale-105 transition-all"
            />
          )}
        </div>
        )}
        <div className=" basis-screen md:basis-[30vw] h-auto md:h-[30vw] bg-black/10 border flex items-center justify-center p-8 mx-0 md:mr-12">
          <Image
            onClick={openModal(true)}
            src={require(`@/../public/${folderName}/${activePicture}.webp`)}
            alt="title"
            width={300}
            height={200}
            className="h:screen md:h-full w-screen md:w-auto object-scale-down"
          />
          {activeModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur flex justify-center items-center"
              onClick={closeModal}>
              <div
                className=" h-[90svh] mt-16 flex items-center gap-32"
                onClick={(e) => e.stopPropagation()}>
                <Image
                  src={require(`@/../public/${folderName}/${activePicture}.webp`)}
                  alt="title"
                  width={600}
                  height={400}
                  className="h:screen md:h-full w-screen md:w-auto object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-20 right-6 p-4 rounded-full bg-norange w-auto flex justify-center items-center font-extrabold text-2xl text-white hover:scale-105 transition-all hover:bg-white hover:text-norange">
                  x
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 md:p-0 text-lg text-justify basis-screen md:basis-1/3 flex flex-col items-center md:items-start justify-start">
          <p className="text-2xl font-extrabold border-b border-norange">
            {title}
          </p>
          <p className="text-xl font-bold my-1">{subtitle}</p>
          <p className="">{par1}</p>
          <p className="my-2">{descriptions}</p>
          <p className="">{li1}</p>
          <p className="">{li2}</p>
          <p className="">{li3}</p>
          <p className="">{li4}</p>
          <p className="">{li5}</p>
          <p className="">{li6}</p>
          <p className="">{li7}</p>
          <p className="">{li8}</p>
          <p className="">{li9}</p>
          <p className="">{li10}</p>
          <p className="my-1 font-bold">{li11}</p>
          <p className="my-2">{price}</p>
          <p className="my-2">{value}</p>
          <p className="my-2">{technical}</p>
        </div>
      </div>
    </div>
  );
}
