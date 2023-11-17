import Image from 'next/image'
import Navbar from "@/components/common/nav"
import ChemistryData from "@/components/sections/chemistryData/chemistryData"
import bgMachine from "@/../public/bgMachine.webp"
import Footer from '@/components/common/footer'



export default function Machines() {
  return (
    <>
      <Navbar />
      <Image src={bgMachine} width={800} height={800} className='w-screen ' priority alt={'BgMachine'}/>
      <ChemistryData />
      <Image src={bgMachine} width={800} height={800} className='w-screen ' priority alt={'BgMachine'}/>
      <Footer />
    </>
)
}
