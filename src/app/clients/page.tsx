'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/common/nav';
import Footer from '@/components/common/footer';
import Carousell from '@/components/elements/Carousell';
import CarousellMobile from '@/components/elements/CarousellMobile';
import db from '@/data/db.json';

// Definicja typu dla elementów karuzeli, przy założeniu, że mamy odpowiedni format danych w db.json
type CarouselItem = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
};

// Definicja typu dla stanu komponentu
interface ClientsState {
  componentLoaded: boolean;
  isPortrait: boolean;
}

const Clients: React.FC = () => {
  const [componentLoaded, setComponentLoaded] = useState<ClientsState['componentLoaded']>(false);
  const [isPortrait, setIsPortrait] = useState<ClientsState['isPortrait']>(false);

  useEffect(() => {
    // Ustawienie stanu, gdy komponenty są załadowane
    setComponentLoaded(true);

    // Funkcja sprawdzająca orientację ekranu
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    // Dodanie nasłuchiwacza na zmianę orientacji ekranu
    window.addEventListener('resize', handleOrientationChange);
    
    // Sprawdzenie orientacji ekranu przy montowaniu komponentu
    handleOrientationChange();

    // Oczyszczenie nasłuchiwacza
    return () => window.removeEventListener('resize', handleOrientationChange);
  }, []);

  return (
    <>
      <Navbar />
      {componentLoaded && (
        <div className="flex justify-center items-center">
          {isPortrait ? (
            <CarousellMobile carouselItems={db.carouselClients} />
          ) : (
            <Carousell carouselItems={db.carouselClients} />
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Clients;
