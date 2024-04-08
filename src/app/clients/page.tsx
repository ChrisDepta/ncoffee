'use client'
import React from "react";
import Navbar from "@/components/common/nav";
import Footer from "@/components/common/footer";
import { useMediaQuery } from 'react-responsive'; // Importujemy hook do obsługi mediów z react-responsive

import Carousell from '@/components/elements/Carousell'
import CarousellMobile from '@/components/elements/CarousellMobile'
import db from "@/data/db.json";

export default function Clients() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' }); // Sprawdzamy, czy urządzenie jest w orientacji pionowej

  return (
    <>
      <Navbar />
      {isPortrait ? <CarousellMobile carouselItems={db.carouselClients}/> : <Carousell carouselItems={db.carouselClients}/>}
      <Footer />
    </>
  );
}
