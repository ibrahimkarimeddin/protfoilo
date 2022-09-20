import React from 'react'
import {Cursor , useTypewriter} from "react-simple-typewriter"
import Curicle from './Curicle';
function Hero() {
    const [text , count] = useTypewriter({
        words: [
            "Ibrahim karim",
            "Front End Dev",
            
        ],
        loop:true , 
        delaySpeed:1500 ,
    }) 
  return (
    <div className='h-screen flex flex-col  space-y-8 items-center justify-center text-center overflow-hidden'>
        <Curicle />
        <img src="/images.png" alt=''
        className='relative h-36 w-36 rounded-full mx-auto  object-fill' />
       <div className="z-20">
        <h2 className='text-md uppercase pb-2 text-gray-500 tracking-[25px] font-bold'>Software </h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
           <span className='mr-3' >{text}</span>
        <Cursor cursorColor='black' />
        </h1>
       </div>
  
    </div>
  )
}

export default Hero