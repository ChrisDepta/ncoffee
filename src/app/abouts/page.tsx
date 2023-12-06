import React from "react"
import NavUni from "@/components/common/nav"
import AboutOne from '../../components/sections/about/aboutone' 
import AboutTwo from "@/components/sections/about/abouttwo"
import Footer from "@/components/common/footer"


export default function Aboutus() {
  return (
  <div className="flex flex-col items-center">
   <NavUni />
   <AboutOne />
   <AboutTwo />
   <Footer />
  </div>
  )
}
