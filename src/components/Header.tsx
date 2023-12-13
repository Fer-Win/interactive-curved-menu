'use client'

import { useState } from "react"
import NavBar from "./NavBar";
import { AnimatePresence } from "framer-motion";
import Curve from "./Curve";

const Header = () => {
  const [isActive,setIsActive] = useState(false);
  return (

    
<>

<div className="button cursor-pointer hover:bg-[#4f64ee] z-30" onClick={()=>{setIsActive(!isActive)}}>
<div className= { `burger ${isActive ? 'burgerActive' : ''} `} ></div>
   </div>
  <AnimatePresence mode="wait">
  {isActive &&   <NavBar/>}
  </AnimatePresence>
   </>
  )
}
export default Header