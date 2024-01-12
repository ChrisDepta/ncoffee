import React from "react"
import Navbar from "@/components/common/nav"
import Footer from "@/components/common/footer"
import Image from "next/image"

import ChataPolska from '@/../public/chataPolska.webp'
import Colibra from '@/../public/colibra.webp'
import HotelDebowy from'@/../public/hotelDebowy.webp'
import KingaLogo from'@/../public/kingaLogo.webp'
import JurajskaLogo from'@/../public/jurajskaLogo.webp'
import WilczyGlod from'@/../public/wilczyGlod.webp'




export default function Clients() {
  return (
  <>
    <Navbar />
    <Image src={ChataPolska} width={400} height={400} className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 m-20' priority alt={'BgOffice'}/>
    <Image src={Colibra} width={400} height={400} className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 m-20' priority alt={'BgOffice'}/>
    <Image src={JurajskaLogo} width={400} height={400} className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 m-20' priority alt={'BgOffice'}/>
    <Image src={HotelDebowy} width={400} height={400} className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 m-20' priority alt={'BgOffice'}/>

    <Image src={KingaLogo} width={400} height={400} className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 m-20' priority alt={'BgOffice'}/>
    <Image src={WilczyGlod} width={400} height={400} className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 m-20' priority alt={'BgOffice'}/>
    <Footer />
  </>
  )
}
