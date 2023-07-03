/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Navbar from '@/components/common/navbar'
import sliderCoffe from "@/../public/Potykacz.jpg"
import AboutOne from '../../components/sections/about/aboutone'
import CoffeeData from '@/components/sections/coffeeData/coffeeData'
import Footer from '@/components/common/footer'



export default function About() {
  
  return (
      <>
        <Navbar />
        <Image src={sliderCoffe} width={800} height={800} className='w-screen ' alt={'SliderNcoffee'}/>
        <AboutOne />
        <CoffeeData />
        <Footer />
      </>
  )
}
