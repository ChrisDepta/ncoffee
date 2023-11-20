import Image from 'next/image'
import Navbar from "@/components/common/nav"
import DispenserData from "@/components/sections/dispenserData/dispenserData"
import slider from "@/../public/bgWaterSea.webp"
import Footer from '@/components/common/footer'



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={slider} width={800} height={800} className='w-screen ' priority alt={'BgWaterHand'}/>
      <DispenserData />
      <Footer />
    </>
)
}
