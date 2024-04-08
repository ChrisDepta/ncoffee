'use client';
// Import necessary dependencies
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Define the interface for each item in the carousel
interface CarouselItem {
  src: string;
  alt: string;
  logo: string;
}

let time = 5000;
// Define the props for the Carousell component
interface CarousellProps {
  carouselItems: CarouselItem[];
}

const Carousell: React.FC<CarousellProps> = ({ carouselItems }) => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === carouselItems.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, time);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage]);

  return (
    <div className="z-40 h-[100svh] w-full flex items-center justify-center mb-56 shadow-2xl">
      <div className="place-items-center w-full mx-auto h-screen">
        <div className="w-full flex justify-center items-center gap-4 trasition-transform ease-in-out duration-500">
          {carouselItems.map((pic, idx) => (
            <div
              className={
                idx === activeImage
                  ? `relative flex items-center justify-end w-full h-[100svh] object-cover transition-all duration-500 ease-in-out`
                  : "hidden"
              }
              key={idx}
              onClick={clickNext}
            >
              <Image
                src={require(`@/../public/${pic.src}.webp`)}
                alt={pic.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover "
              />
              <div className="bg-white w-[90%] absolute bottom-24 h-28 flex justify-center items-center rounded-bl-2xl">
              <Image
                src={require(`@/../public/${pic.logo}.webp`)}
                alt={pic.alt}
                className="object-fit h-[90%] w-auto"
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousell;
