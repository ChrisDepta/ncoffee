import Image from 'next/image'
import Navbar from '@/components/common/nav'
import Footer from '@/components/common/footer'

import MachineData from '@/components/sections/machineData/machineData'

import slider from "@/../public/bgFresco.webp"

export default function Machines() {
  
  return (
      <>
        <Navbar />
        <Image src={slider} width={800} height={800} className='z-0 h-[70vh] w-full object-cover object-top fixed ' priority alt={'SliderNcoffee'}/>
        <MachineData />
        <Footer />
      </>
  )
}
