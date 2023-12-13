import {motion } from 'framer-motion';

const Curve = () => {
  const intialPath = `M100 0  L100 ${window.innerHeight} Q0 ${window.innerHeight/2} 100 0`
  const targetPath = `M100 0  L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`

  const pathAnimation = {
    initial: {
      d: intialPath
    },
    enter:{
      d: targetPath,
      transition : {duration:1, ease:[0.76, 0, 0.24, 1]},
    },
    exit:{
      d: targetPath,
      transition : {duration:3, ease:[0.76, 0, 0.24, 1]},
    }
  }
  return (
    <svg className="absolute top-0 right-[20rem] w-[100px] h-screen fill-[#1a1a1] stroke-none">
      <motion.path variants={pathAnimation} initial="initial" animate="enter" exit="exit" fill="#1a1a1a" stroke="none"></motion.path>
    </svg>
  )
}
export default Curve