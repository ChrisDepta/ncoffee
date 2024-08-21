"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/common/nav";
import Footer from "@/components/common/footer";
import Carousell from "@/components/elements/carousell";
import CarousellMobile from "@/components/elements/carousellMobile";
import db from "@/data/db.json";

const Clients: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  useEffect(() => {
    // Definicja funkcji jest wywoływana tylko po stronie klienta
    const handleOrientationChange = () => {
      // Bezpieczne użycie window, ponieważ znajduje się w bloku, który wykonuje się tylko w przeglądarce
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleOrientationChange);
      // Ustawienie początkowego stanu
      handleOrientationChange();

      // Czyszczenie event listenera przy odmontowywaniu komponentu
      return () =>
        window.removeEventListener("resize", handleOrientationChange);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        {isPortrait ? (
          <CarousellMobile carouselItems={db.carouselClients} />
        ) : (
          <Carousell carouselItems={db.carouselClients} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Clients;
