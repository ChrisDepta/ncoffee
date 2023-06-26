/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Navbar from '@/components/common/navbar'
import sliderCoffe from "@/../public/Potykacz.jpg"
import AboutOne from '../../components/sections/about/aboutone'
import Alfredotipo from '@/components/sections/coffe/alfredotipo'
import Prado from '@/components/sections/coffe/prado'
import Vular from '@/components/sections/coffe/vular';
import Corrado from '@/components/sections/coffe/corrado'
import ALfredosuper from '@/components/sections/coffe/alfredosuper'



export default function About() {
  return (
      <>
        <Navbar />
        <Image src={sliderCoffe} width={800} height={800} className='w-screen ' alt={'SliderNcoffee'}/>
        <AboutOne />
        <Vular />
        <Prado />
        <Corrado />
        <Alfredotipo />
        <ALfredosuper />
        
        <div className='min-h-screen'></div>
      </>
  )
}
