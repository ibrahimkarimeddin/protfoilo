import React from 'react'
import { motion } from 'framer-motion';

function WorkexpCard() {
  return (
    <div className='flex flex-col rounded-lg items-center space-y-7  justify-center
    flex-shrink-0 w-[280px] md:w-[350px]  xl:w-[500px]  border border-black p-3 
     bg-gray-200 shadow-2xl 
    cursor-pointer transition-opacity duration-200 overflow-hidden h-[480px] '>
    
        <motion.img 
        initial={{y:-100 , opacity:0}}
        transition={{duration:1.5}}
        whileInView={{opacity:1 , y:0}}
        className="w-24 h-24  rounded-full xl:w-[150px] xl:h-[150px] object-center snap-start"
        alt="" 
        src="/chat.png" />
        <div className="px-0 md:px-10 ">
            <h4 className='text-4xl font-light text-center'>Front End </h4>
            <p className="text-2xl my-5 font-bold ">Free Lancer</p>
            
            <div className="flex space-x-[2px] my-2 md:space-x-5   ">
                <img className='h-16 w-16 rounded-full  object-center alt="' 
                src="/nextjs.png"/>
                <img className='h-16 w-16 rounded-full  object-center alt="' 
                src="/socket.png"/>
                <img className='h-16 w-16 rounded-full  object-center alt="' 
                src="/mui.png"/>
                 <img className='h-16 w-16 rounded-full  object-center alt="' 
                src="/redux.jpg"/>
            </div>
            <ul className="list-disc space-y-4 text-lg ">
                <li className='text-sm font-semibold'>
                Build full stack real-time communication provided by Socket.io to create an open chat application that
                allows users to for sending messages between multiple users in real time or on user with online massege
                ,It offers products like Centralized Login Page 
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default WorkexpCard