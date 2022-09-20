import React from 'react'
import { motion } from 'framer-motion';
import SkillCircle from './SkillCircle';

function Skill() {
  return (
    <motion.div className='min-h-screen flex relative text-center flex-col md:text-left max-w-[2000px]
    xl:px-10 justify-center xl:space-y-8 mx-auto items-center'>
        <h3 className="absolute top-10 uppercase tracking-[30px] text-gray-400 text-3xl ml-10 font-semibold">
            Skill
        </h3>
        <div className="grid grid-cols-4  gap-5 relative top-5 ">
            <SkillCircle src="/html.png" duration="left"/>
            <SkillCircle src="/css.png"  duration="left"/>
            <SkillCircle src="/js.png" duration="right"/>
            <SkillCircle src="/reactjs.png"duration="right"/>
            <SkillCircle src="/nextjs.png" duration="left"/>
            <SkillCircle src="/socket.png" duration="left"/>
            <SkillCircle src="/sql.png" duration="right"/>
            <SkillCircle src="/tailiwnd.png" duration="right"/>
            <SkillCircle src="/redux.jpg" duration="left"/>
            <SkillCircle src="/problem.png" duration="left"/>
            <SkillCircle src="/mui.png" duration="right"/>
            <SkillCircle src="/query.png" duration="right"/>
            <SkillCircle src="/hub.png" duration="right"/>
            <SkillCircle src="/ts.png" duration="right"/>
            <SkillCircle src="/vue.png" duration="right"/>
            <SkillCircle src="/qraph.png" duration="right"/>
        </div>
    </motion.div>

  )
}

export default Skill