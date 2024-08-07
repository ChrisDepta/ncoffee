"use client";
import React from "react";
import Image from "next/image";
import left from "@/../public/left.png";
import right from "@/../public/right.png";
import { motion } from "framer-motion";
import logoorange from "@/../public/ncoffeeOrange.webp";

type Props = {
  clickNext: any;
  clickPrev: any;
  activeImgIndex: any;
  carouselItems: any;
  clickActiveIdx: any;
};

export const Description = ({
  clickNext,
  clickPrev,
  activeImgIndex,
  carouselItems,
  clickActiveIdx,
}: Props) => {
  return (
    <div className="grid place-items-start w-full h-[100svh] bg-white relative">
      {/* <div className="absolute mt-20 right-6 text-2xl text-norange uppercase tracking-wider font-bold">
        <Image
          src={logoorange}
          width={150}
          height={100}
          className=" m-0 sm:m-6 mt-2 w-auto h-auto"
          priority
          alt={"ncoffee makes your day"}
        />
      </div> */}
      {carouselItems.map(
        (
          pic: {
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined;
            des:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined;
          },
          idx: React.Key | null | undefined
        ) => (
          <div
            key={idx}
            className={
              idx === activeImgIndex
                ? `block w-3/4 h-screen px-12 pt-20 object-cover transition-all duration-500 ease-in-out`
                : "hidden"
            }
          >
            <motion.div
              initial={{
                opacity: idx === activeImgIndex ? 0 : 0.5,
                scale: idx === activeImgIndex ? 0.5 : 0.3,
              }}
              animate={{
                opacity: idx === activeImgIndex ? 1 : 0.5,
                scale: idx === activeImgIndex ? 1 : 0.3,
              }}
              transition={{
                ease: "linear",
                duration: 1,
                x: { duration: 1 },
              }}
              className="w-full"
            >
              <div className="py-10 text-4xl font-extrabold">{pic.title}</div>
              <div className="leading-relaxed text-xl font-medium tracking-wide h-40 w-1/2 italic text-gray-800">
                {pic.des}
              </div>
            </motion.div>
            {/* <button className="absolute bottom-2 bg-norange text-white uppercase px-4 py-2 rounded-md my-10 w-auto h-auto">
            order now
          </button> */}
          </div>
        )
      )}
      <div className="z-50 relative w-screen flex justify-between items-center -top-[50vh] right-[50vw] px-20">
              <div
                onClick={clickPrev}
                className="relative cursor-pointer bg-norange rounded-full p-2 shadow-xl"
              >
                <Image src={left} alt="" width={20} height={20} />
              </div>
              <div className="z-50 relative transform  w-auto top-[40vh] bg-white/80 rounded-full shadow-xl">
                <div className="z-50 relative transform m-2 flex justify-center items-center gap-3">
                  {carouselItems.map(
                    (_: any, idx: React.Key | null | undefined) => (
                      <div
                        key={idx}
                        onClick={() => clickActiveIdx(idx)}
                        className={`w-6 h-6 rounded-full cursor-pointer shadow-lg ${
                          idx === activeImgIndex
                            ? "bg-norange"
                            : "bg-black/40 backdrop-blur"
                        }`}
                      />
                    )
                  )}
                </div>
              </div>
              <div
                onClick={clickNext}
                className="relative  cursor-pointer bg-norange rounded-full p-2 shadow-xl"
              >
                <Image src={right} alt="" width={20} height={20} />
              </div>
            </div>
    </div>
  );
};
export default Description;
