import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import water from "../../public/water.webp"
import ncoffeeBraun  from "../../public/ncoffeeBraun.webp"
import CardCoffe from '@/components/elements/cardCoffee'
import CardWater from '@/components/elements/cardWater'

export default function Home() {
  return (
    <div className="homePage w-screen flex items-center justify-center ">
      <main className='h-screen w-10/12 flex items-center justify-around'>
        <CardCoffe />
        <CardWater />
      </main>
    </div>
  )
}
