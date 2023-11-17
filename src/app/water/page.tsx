import Image from 'next/image'
import Navbar from "@/components/common/nav"
import WaterData from "@/components/sections/waterData/waterData"
import bgWaterHand from "@/../public/bgWaterHand.webp"
import waterwave from "@/../public/waterwave.webp"
import Footer from '@/components/common/footer'



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={bgWaterHand} width={800} height={800} className='w-screen ' priority alt={'BgWaterHand'}/>
      <WaterData />
      <Image src={waterwave} width={800} height={800} className='w-screen ' priority alt={'waterwave'}/>
      <Footer />
    </>
)
}
