'use client'

import { useState } from "react"

const Header = () => {
  const [isActive,setIsActive] = useState(false);
  return (

    

   <div className="button cursor-pointer " onClick={()=>{setIsActive(!isActive)}}>
<div className= { `burger ${isActive ? 'burgerActive' : ''} `} ></div>
   </div>
  )
}
export default Header