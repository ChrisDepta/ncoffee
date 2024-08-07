import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  subtitle: string;
  li1: string;
  li2: string;
  li3: string;
  price: string;
  picture1: string;
  picture2: string;
  picture3: string;
  picture4: string;
  path: string;
  waterContainer: string;
  coffeeContainer: string;
  groundsContainer: string;
  power: string;
  height: string;
  witdh: string;
  depth: string;
  weight: string;
  folderName: string;
};

export default function MachineCard(
  this: any,
  {
    folderName,
    height,
    witdh,
    depth,
    weight,
    waterContainer,
    coffeeContainer,
    groundsContainer,
    power,
    id,
    path,
    title,
    subtitle,
    li1,
    li2,
    li3,
    price,
    picture1,
    picture2,
    picture3,
    picture4,
  }: Props
) {
  return (
    <div
      key={id}
      className="w-[100vw] md:w-auto h-[100svh] md:h-auto bg-gradient-to-br from-black/10 to-white md:mt-8 md:mb-20 rounded-none md:rounded-xl shadow-none md:shadow-2xl basis-full md:basis-auto flex flex-col justify-center items-center text-xl font-bold">
      <div className=" basis-full w-auto md:w-64 flex flex-col justify-center md:justify-end items-center p-0 md:p-6 ">
        <Link href={`/products/${path}`}>
          <p className="block md:hidden text-2xl text-black uppercase font-extrabold mb-16">
            {title}
          </p>
        </Link>
        <Link href={`/products/${path}`}>
          <Image
            src={require(`@/../public/${folderName}/${picture1}.webp`)}
            width={800}
            height={800}
            className="h-auto md:h-56 w-auto hover:scale-110 transition"
            alt={picture1}
          />
        </Link>
      </div>
      <div className="hidden md:flex basis-auto w-full bg-white rounded-none md:rounded-b-xl flex-col justify-end items-center">
        <Link href={`/products/${path}`}>
          <p className="text-2xl text-black uppercase font-extrabold m-4">
            {title}
          </p>
        </Link>
        <p className=" capitalize mb-4">{subtitle}</p>
      </div>
    </div>
  );
}
