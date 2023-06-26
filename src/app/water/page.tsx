import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import portrait  from "../../../public/portrait.webp"
import depidevLogo from "../../public/depidevLogoDark.webp"
import AboutOne from '@/components/sections/about/aboutone'
import Calculator from "@/components/sections/calc/calc"

export default function About() {
  return (
      <>
        <h1 className='text-7xl text-black'>Hello Water</h1>
      </>
  )
}
