import React from "react"
import Navbar from "@/components/common/nav"
import Footer from "@/components/common/footer"
import Image from "next/image"

import ChataPolska from '@/../public/chataPolska.png'
import Colibra from '@/../public/colibra.png'
import HotelDebowy from'@/../public/hotelDebowy.png'
import KingaLogo from'@/../public/kingaLogo.webp'
import JurajskaLogo from'@/../public/jurajskaLogo.webp'
import WilczyGlod from'@/../public/wilczyGlod.png'




export default function Clients() {
  return (
  <>
    <Navbar />
    <Image src={ChataPolska} width={800} height={800} className='' priority alt={'BgOffice'}/>
    <Image src={Colibra} width={800} height={800} className='' priority alt={'BgOffice'}/>
    <Image src={HotelDebowy} width={800} height={800} className='' priority alt={'BgOffice'}/>
    <Image src={JurajskaLogo} width={800} height={800} className='' priority alt={'BgOffice'}/>
    <Image src={KingaLogo} width={800} height={800} className='' priority alt={'BgOffice'}/>
    <Image src={WilczyGlod} width={800} height={800} className='' priority alt={'BgOffice'}/>
    <Footer />
  </>
  )
}
