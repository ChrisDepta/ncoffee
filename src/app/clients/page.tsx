'use client'
import React from "react";
import Navbar from "@/components/common/nav";
import Footer from "@/components/common/footer";

import Carousell from '@/components/elements/Carousell2'
import db from "@/data/db.json";

export default function Clients() {


  return (
    <>
      <Navbar />
      <Carousell carouselItems={db.carouselClients}/>
      <Footer />
    </>
  );
}
