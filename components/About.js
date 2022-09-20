import React from 'react'
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:0.8
    }}
    className="flex flex-col h-screen relative 
    text-center md:text-left md:flex-ro
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-4 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1.3
        }} 
        whileInView={{
            opacity:1,
            x:0
        }}
        viewport={{once:true}} 
        src="/ib.jpg" alt="" className="
        -mb-20 md:mb-0 flex-shrink-0  relative md:top-12
         w-48 h-48 rounded-full md:w-64 md:h-64  xl:-[400px] xl:-[450px] object-fill">

        </motion.img>
        <div className=" md:mb-20 mx-10 relative md:top-16">
        <h4 className='text-center font-bold text-xl sm:text-2xl md:mb-10 mb-4  '>Front End Developer</h4>
        <h4 className='text-center  text-md xl:text-2xl md:text-xl '>Self-motivated, ambitious, and hard-working individual frontend developer seeking for frontend developer
position hoping to make use of my interpersonal skills to achieve goals of a company that focuses on client
satisfaction and user experience, and to develop my skills in the work field.</h4>
    </div>
        </motion.div>
  )
}

export default About