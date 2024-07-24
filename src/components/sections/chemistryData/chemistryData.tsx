import React from "react";
import data from "@/data/db.json";
import Card from "@/components/elements/card";

export default function ChemistryData() {
  const { frescoChemistries, filters, ebaristaChemistries } = data;

  return (
    <div className="z-10 mt-[70vh] bg-white flex flex-col justify-center md:justify-start items-center w-full pb-32">
      <div className="pt-12 flex flex-col justify-center md:justify-start items-center md:items-start w-full md:w-[80%]">
        <p className="text-center my-12 md:my-0 md:px-12 text-3xl md:text-5xl font-extrabold tracking-wider text-black">
          Środki czyszczące firmy Fresco
        </p>
        <div className="overflow-x-hidden gap-0 md:gap-8 flex flex-wrap justify-start items-start md:px-12">
          {frescoChemistries.map((item) => {
            const Component = Card;
            return <Component key={item.id} {...item} />;
          })}
        </div>
        <p className="text-center my-12 md:my-0 md:px-12 text-3xl md:text-5xl font-extrabold tracking-wider text-black">
          Środki czyszczące firmy E-Barista
        </p>
        <div className="overflow-x-hidden gap-0 md:gap-8 flex flex-wrap justify-start items-start md:px-12">
          {ebaristaChemistries.map((item) => {
            const Component = Card;
            return <Component key={item.id} {...item} />;
          })}
        </div>
        <p className="text-center my-12 md:my-0 p-0 md:px-12 text-3xl md:text-5xl font-extrabold tracking-wider text-black">
          Filtry
        </p>
        <div className="overflow-x-hidden gap-0 md:gap-8 flex flex-wrap justify-start items-start md:px-12">
          {filters.map((item) => {
            const Component = Card;
            return <Component key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}
