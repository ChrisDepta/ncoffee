import Image from 'next/image'
import Navbar from '@/components/common/nav'
import Footer from '@/components/common/footer'

import bgImage from "@/../public/coffeeSlider.webp"

import CoffeeData from '@/components/sections/coffeeData/coffeeData'

export default function Coffee() {
  
  return (
      <>
        <Navbar />
        <Image src={bgImage} width={800} height={800} className='z-0 h-[70vh] w-full object-cover object-bottom fixed  ' priority alt={'SliderNcoffee'}/>
        <CoffeeData />
        <Footer />
      </>
  )
}
