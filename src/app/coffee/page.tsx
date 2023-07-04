import Image from 'next/image'
import Navbar from '@/components/common/navcoffee'
import sliderCoffe from "@/../public/coffeeSlider.webp"
import CoffeeData from '@/components/sections/coffeeData/coffeeData'
import Footer from '@/components/common/footer'



export default function Coffee() {
  
  return (
      <>
        <Navbar />
        <Image src={sliderCoffe} width={800} height={800} className='w-screen ' alt={'SliderNcoffee'}/>
        <CoffeeData />
        <Footer />
      </>
  )
}
