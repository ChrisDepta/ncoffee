import Image from 'next/image'
import Navbar from '@/components/common/nav'
import Footer from '@/components/common/footer'

import ChemistryData from '@/components/sections/chemistryData/chemistryData'

import slider from "@/../public/bgOffice.webp"




export default function Chemistry() {
  
  return (
      <>
        <Navbar />
        <Image src={slider} width={800} height={800} className='z-0 h-[70vh] w-full object-cover fixed' priority alt={'SliderNcoffee'}/>
        <ChemistryData />
        <Footer />
      </>
  )
}
