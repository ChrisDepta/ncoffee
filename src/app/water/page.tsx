import Image from 'next/image'
import Navbar from "@/components/common/navcoffee"
import WaterData from "@/components/sections/waterData/waterData"
import bgWaterHand from "@/../public/bgWaterHand.webp"
import bgWaterSea from "@/../public/bgWaterSea.webp"
import Footer from '@/components/common/footer'



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={bgWaterHand} width={800} height={800} className='w-screen ' priority alt={'BgWaterHand'}/>
      <WaterData />
      <Image src={bgWaterSea} width={800} height={800} className='w-screen ' priority alt={'BgWaterSea'}/>
      <Footer />
    </>
)
}
