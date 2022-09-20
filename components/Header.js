import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion"
function Header() {
  return (
    <header className='flex justify-between  overflow-hidden
    items-start mx-auto max-w-7xl stijcky top-0 p-5 xl:items-center'>
        <motion.div className='flex items-center'
        initial={{
            x:-500 , 
            opacity:0 , 
            scale:0.5
        }}
        animate={{
            x:0, 
            scale:1, 
            opacity:1,
        }}
        transition={{
            duration:1.3
        }}>
        <SocialIcon url="https://www.facebook.com/profile.php?id=100084333353132" fgColor='black'
        bgColor='transparent' 
        network='facebook' 
        target="blanck"/>
        <SocialIcon url="https://wa.me/962922763/" fgColor='black'
         network='whatsapp' 
         target="blanck"
        bgColor='transparent'/>
        <SocialIcon url="https://instagram.com/kreem_aldeen/" fgColor='black'
        bgColor='transparent'
        network='instagram'
        target="blanck"/>
        <SocialIcon url="https://github.com/ibrahimkarimeddin?tab=repositories/" fgColor='black'
        bgColor='transparent'
        network='github'
        target="blanck"/>
        </motion.div>



        <motion.div 
        className='flex items-center text-black-300'
        initial={{
            x:500 , 
            opacity:0 , 
            scale:0.5
        }}
        animate={{
            x:0, 
            scale:1, 
            opacity:1,
        }}
        transition={{
            duration:1.3
        }}>
        <SocialIcon url="https://mail.google.com/mail/u/0/#inbox" 
        className='cursor-pointer'
        network='email'
        target="blank"
        fgColor="black"
        bgColor='transparent'/>
        <p className=' hidden md:inline-flex text-black'>
           ibrahimkarimeddin@gmail.com
        </p>
        </motion.div>
    </header>
  )
}

export default Header