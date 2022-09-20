import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About';
import Workexp from '../components/Workexp';
import Project from '../components/Project'

// import {client} from "../Lib/Client"
import Header from './../components/Header';
import Hero from './../components/Hero';
import Skill from './../components/Skill';



export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] bg-gray-200 text-black h-screen  
    overflow-scroll z-0 snap-y snap-mandatory'>
    <Head>
      <title>Ibrahim Protfolio</title>
    </Head>

    <header className="snap-end">
    <Header />
    </header>


    <section id="hero" className='snap-start'>
      <Hero/>
    </section>

    <section className="snap-center">
    <About /> 
    </section>

    <section className="snap-start">
      <Workexp />
    </section>
    <section className="snap-start">
      <Skill /> 
    </section>
    <section className="snap-center">
      <Project /> 
    </section>
    </div>
  )
}







