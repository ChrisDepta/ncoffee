import React from "react"
import NavUni from "@/components/common/navUni"
import AboutOne from '../../components/sections/about/aboutone' 
import AboutTwo from "@/components/sections/about/abouttwo"


export default function Aboutus() {
  return (
  <div className="flex flex-col items-center">
   <NavUni />
   <AboutOne />
   <AboutTwo />
  </div>
  )
}
