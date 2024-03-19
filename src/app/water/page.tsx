import Image from 'next/image'
import Navbar from "@/components/common/nav"
import Footer from '@/components/common/footer'

import bgImage from "@/../public/bgWaterHand.webp"

import WaterData from "@/components/sections/waterData/waterData"



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={bgImage} width={800} height={800} className=' z-0 h-[70vh] w-full object-cover fixed ' priority alt={'bgImage'}/>
      <WaterData />
      <Footer />
    </>
)
}
