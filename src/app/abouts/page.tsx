import React from "react"
import NavUni from "@/components/common/nav"
import Footer from "@/components/common/footer"
import Carousell from '@/components/elements/Carousell'
import db from  '@/data/db.json'


export default function Aboutus() {
  return (
  <div className="flex flex-col items-center">
   <NavUni />
   <Carousell carouselItems={db.carouselAbout}/>
   <Footer />
  </div>
  )
}
