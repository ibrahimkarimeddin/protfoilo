import React from 'react'
import { motion } from 'framer-motion';
import WorkexpCard from './WorkexpCard';
import WorkexpCard2 from './WorkexpCard2';

function Workexp() {
  return (
    <motion.div 
    className="h-screen flex relative overflow-hidden flex-col text-left 
    md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1
    }}>
        <h3 className="absolute top-3 sm:top-3 mb-5 uppercase tracking-[20px] text-gray-500 text-2xl z-90 ">Experience</h3>
        <div className='w-full flex space-x-5  overflow-x-scroll md:justify-evenly lg:overflow-x-hidden p-7  snap-x snap-mandatory'>
            <span className="snap-center"><WorkexpCard /></span>
            <span className="snap-center"><WorkexpCard2 /></span>


        </div>
    </motion.div>
  )
}

export default Workexp