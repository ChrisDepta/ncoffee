"use client";
// Import necessary dependencies
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import db from "@/data/db.json";
import Description from "@/components/elements/Description";

const carouselItems = db.carouselItems; // Use data from db.json

const Carousell = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === carouselItems.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(carouselItems.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage]);

  console.log(carouselItems);
  return (
    <div className="z-40  h-[100svh] w-full flex items-center justify-center">
      <div className="grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
        <div className="w-full flex justify-center items-center gap-4 trasition-transform ease-in-out duration-500 rounded-2xl">
          {carouselItems.map((pic, idx) => (
            <div
              className={
                idx === activeImage
                  ? `block w-full h-[80svh] object-cover transition-all duration-500 ease-in-out`
                  : "hidden"
              }
              key={idx}
            >
              <Image
                src={require(`@/../public/${pic.src}.webp`)}
                alt={pic.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
              />
            </div>
          ))}
        </div>
        <Description
          activeImgIndex={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </div>
  );
};

export default Carousell;
