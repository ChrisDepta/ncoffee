'use client'
import React, { useState, useEffect } from "react";
import Navbar from "@/components/common/nav";
import Footer from "@/components/common/footer";
import { useMediaQuery } from 'react-responsive'; // Importujemy hook do obsługi mediów z react-responsive

// dynamiczne importowanie komponentów Carousell i CarousellMobile
const Carousell = React.lazy(() => import('@/components/elements/Carousell'));
const CarousellMobile = React.lazy(() => import('@/components/elements/CarousellMobile'));

import db from "@/data/db.json";

export default function Clients() {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' }); // Sprawdzamy, czy urządzenie jest w orientacji pionowej

  useEffect(() => {
    // Ustawienie stanu, gdy komponenty są załadowane
    setComponentLoaded(true);
  }, []);

  return (
    <>
      <Navbar />
      {/* Warunek sprawdzający, czy komponenty są załadowane, zanim zostaną wyrenderowane */}
      {componentLoaded && (
        <React.Suspense fallback={<div>Loading...</div>}>
          {isPortrait ? <CarousellMobile carouselItems={db.carouselClients}/> : <Carousell carouselItems={db.carouselClients}/>}
        </React.Suspense>
      )}
      <Footer />
    </>
  );
}
