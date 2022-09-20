import React from 'react'
import { motion } from 'framer-motion';

function Curicle() {
  return (
    <motion.div className='relative flex 
    justify-center items-center' 
    initial= {{ opacity:0}}
    animate={{
        scale:[1,2,2,3,1] ,
        opacity:[0.1 ,0.2, 0.4, 0.8,0.1 , 1.0],
    }}
    transition={{
        duration:2.5,
    }}>
        <div className='absolute border border-[#333333] rounded-full
         h-[200px] w-[200px] animate-ping mt-52'></div>
        <div className='absolute border border-[#333333] rounded-full
         h-[300px] w-[300px] -ping mt-52'></div>
        <motion.div className='absolute border border-[#333333] rounded-full
         h-[450px] w-[450px] -ping mt-52' 
         initial= {{ opacity:0}}
         animate={{
             scale:[1,2,2,3,1] ,
             opacity:[0.1 ,0.2, 0.4, 0.8,0.1 , 1.0 ,0],
         }}
         transition={{
             duration:2.5,
         }}></motion.div>
        <div className='absolute border border-yellow-500 hidden sm:block  rounded-full
         h-[550px] w-[550px] animate-pulse mt-56 opacity-20'></div>

    </motion.div>
  )
}

export default Curicle