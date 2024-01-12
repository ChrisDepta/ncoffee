import Image from 'next/image'
import Navbar from "@/components/common/nav"
import WaterData from "@/components/sections/waterData/waterData"
import bgImage from "@/../public/bgWaterHand.webp"
import Footer from '@/components/common/footer'



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={bgImage} width={800} height={800} className=' z-0 w-full fixed ' priority alt={'bgImage'}/>
      <WaterData />
      <Footer />
    </>
)
}
