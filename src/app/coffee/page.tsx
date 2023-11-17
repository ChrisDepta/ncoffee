import Image from 'next/image'
import Navbar from '@/components/common/nav'
import Footer from '@/components/common/footer'

import CoffeeData from '@/components/sections/coffeeData/coffeeData'

import sliderCoffe from "@/../public/coffeeSlider.webp"
import bgOffice from "@/../public/bgOffice.webp"





export default function Coffee() {
  
  return (
      <>
        <Navbar />
        <Image src={sliderCoffe} width={800} height={800} className='w-screen ' priority alt={'SliderNcoffee'}/>
        <CoffeeData />
        <Image src={bgOffice} width={800} height={800} className='w-screen ' priority alt={'BgOffice'}/>
        <Footer />
      </>
  )
}
