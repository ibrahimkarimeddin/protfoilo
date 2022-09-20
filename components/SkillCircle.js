import React from 'react'
import { motion } from 'framer-motion';

function SkillCircle({src , duration}) {
    let a= duration =="right" ? 100 : 100
  return (
    <div className='relative flex cursor-pointer group'>
        <motion.img 
        initial={{y:a ,
        opacity:0}}
        whileInView={{ opacity:1 , y:0}}
        transition={{duration:1.5}}
        src={src}
        className='rounded-full border border-gray-500  bg-center  p-
        w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 first-letter:first-line:
        filter   '/>
    </div>
  )
}

export default SkillCircle