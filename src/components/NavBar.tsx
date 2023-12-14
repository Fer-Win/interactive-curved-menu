import Link from 'next/link'
import { title } from 'process'
import localFont from 'next/font/local'
import {motion} from 'framer-motion'
import { menuSlide, slide } from './anim';
import Curve from './Curve';

const myFont = localFont({src: "../../public/fonts/Fractul-Regular.ttf"})

const NavBar = () => {


  const navItems = [
    {
      title:"Home",
      href:"/"
    },
    {
      title:"About",
      href:"/"
    },
    {
      title:"Work",
      href:"/"
    },
    {
      title:"Contact",
      href:"/"
    }
  ]

  return (
    <motion.div variants={menuSlide} animate={menuSlide.enter} exit={menuSlide.exit} initial={menuSlide.initial} style={myFont.style} className=''>
      <Curve/>
      <div className='flex justify-end h-screen w-screen'>
        <div className='bg-[#1a1a1a] h-screen w-[20rem] px-10 gap-8 flex justify-start py-40 text-white flex-col'>
        <div className='opacity-80'>Navigation
          <div className='h-[1px] bg-white w-[40%] mt-2'></div>
        </div>
          <div className='flex flex-col gap-5 text-white max-h-[200px] text-3xl'>
           
            {
              navItems.map((item,index)=>{
              return <motion.div key={index} custom={index} variants={slide} animate="enter" exit="exit" initial="initial">
                <Link className='hover:text-4xl transition-all duration-100 ease-in-out' href={item.href} key={index}>{item.title} </Link> 
              </motion.div>
              })
            }
          </div>
          <div className='flex text-white text-xs justify-between mt-20 opacity-70'>
          <p>Awwards</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default NavBar