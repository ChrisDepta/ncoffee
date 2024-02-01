'use client'
import React from "react";
import Navbar from "@/components/common/nav";
import Footer from "@/components/common/footer";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ChataPolska from "@/../public/chataPolska.webp";
import Colibra from "@/../public/colibra.webp";
import HotelDebowy from "@/../public/hotelDebowy.webp";
import KingaLogo from "@/../public/kingaLogo.webp";
import JurajskaLogo from "@/../public/jurajskaLogo.webp";
import WilczyGlod from "@/../public/wilczyGlod.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";

export default function Clients() {
  const images = [
    ChataPolska,
    Colibra,
    JurajskaLogo,
    HotelDebowy,
    KingaLogo,
    WilczyGlod,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar />
      <Slider {...settings} className="z-20 h-2/3 w-1/2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image}
              width={1000}
              height={1000}
              layout="responsive"
              alt={`Image ${index}`}
              className=""
            />
          </div>
        ))}
      </Slider>
      <Footer />
    </>
  );
}
