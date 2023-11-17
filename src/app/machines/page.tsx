import Image from 'next/image'
import Navbar from "@/components/common/nav"
import MachineData from "@/components/sections/machineData/machineData"
import bgFresco from "@/../public/bgFresco.webp"
import bgOffice from "@/../public/bgOffice.webp"
import Footer from '@/components/common/footer'



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={bgFresco} width={800} height={800} className='w-screen ' priority alt={'BgFresco'}/>
      <MachineData />
      <Image src={bgOffice} width={800} height={800} className='w-screen ' priority alt={'BgOffice'}/>
      <Footer />
    </>
)
}
