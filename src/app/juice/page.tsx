import Image from 'next/image'
import Navbar from "@/components/common/nav"
import WaterData from "@/components/sections/waterData/waterData"
import slider from "@/../public/bgWaterGlass.webp"
import Footer from '@/components/common/footer'



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={slider} width={800} height={800} className='w-screen ' priority alt={'BgWaterHand'}/>
      <WaterData />
      <Footer />
    </>
)
}
