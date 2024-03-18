"use client";
import React from "react";
import Image from "next/image";
import left from "@/../public/left.png";
import right from "@/../public/right.png";
import { motion } from "framer-motion";


type Props = {
  clickNext: any;
  clickPrev: any;
  activeImgIndex: any;
  carouselItems: any;
};

export const Description = ({
  clickNext,
  clickPrev,
  activeImgIndex,
  carouselItems,
}: Props) => {
  return (
    <div className="grid place-items-start w-full bg-white relative rounded-tr-3xl rounded-br-3xl">
      <div className="absolute right-6 top-4 text-2xl text-norange uppercase tracking-wider font-bold">
        NCOFFEE
      </div>
      {carouselItems.map((pic: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; des: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, idx: React.Key | null | undefined) => (
        <div
          key={idx}
          className={
            idx === activeImgIndex
              ? `block w-full h-[80svh] px-12 pt-10 object-cover transition-all duration-500 ease-in-out`
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
                x: { duration: 1},
            }}
            className="w-full"
          >
            <div className="py-10 text-3xl font-extrabold">{pic.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-40 italic text-gray-800">
              {pic.des}
            </div>
          </motion.div>
          {/* <button className="absolute bottom-2 bg-norange text-white uppercase px-4 py-2 rounded-md my-10 w-auto h-auto">
            order now
          </button> */}
          <div className="absolute bottom-1 -right-20 w-full flex justify-center items-center ">
            <div
              onClick={clickPrev}
              className="absolute bottom-2 right-10 cursor-pointer bg-norange rounded-full p-2"
            >
              <Image src={left} alt="" width={20} height={20} />
            </div>
            <div
              onClick={clickNext}
              className="absolute bottom-2 right-0 cursor-pointer bg-norange rounded-full p-2"
            >
              <Image src={right} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Description;
