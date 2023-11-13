import Image from 'next/image'
import Navbar from "@/components/common/navcoffee"
import MachineData from "@/components/sections/machineData/machineData"
import bgMachine from "@/../public/bgMachine.webp"
import Footer from '@/components/common/footer'



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={bgMachine} width={800} height={800} className='w-screen ' priority alt={'BgMachine'}/>
      <MachineData />
      <Image src={bgMachine} width={800} height={800} className='w-screen ' priority alt={'BgMachine'}/>
      <Footer />
    </>
)
}
