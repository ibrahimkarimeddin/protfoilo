import React , {useRef,useState}from 'react'

function Project() {
    const input =useRef()
    const nextproject = ()=>{
        input.current.scroll({
            left: input.current.scrollLeft+1000,
             behavior: 'smooth'
           });
    }
    const beforproject =()=>{
        input.current.scroll({
           left: input.current.scrollLeft-1000,
            behavior: 'smooth'
          });
    }
    const projects = [
        {link:"https://ecommerce-shirts.vercel.app/" , id:1 , name_project:"Shirts_Store" , src:"/shirts.png" ,github:"https://github.com/ibrahimkarimeddin/Ecommerce-Shirts",
    desc:"Build full stack Shirts Store with nice design and full responseve you can bay and put your product in Cart , Built with Html css js Next js sanity.io TailwindCss "},
    
 {link:"https://ibrahim-quiz-game.vercel.app/"  ,id:3, name_project:"Quiz_game" , src:"/ques.jpg" , github:"https://github.com/ibrahimkarimeddin/quiz_game" 
 ,desc:"Created an online quiz game  to test users on Country theory, which included designing the user interface and testing functionality ,Built with Html , css, js, Reactjs , Mui   "},
    {link:"" ,id:2, name_project:"TV movie" , src:"/hulu.jpeg",github:"https://github.com/ibrahimkarimeddin/Tv-film-Project" 
 ,desc:"Designed and built a Movies review webpage, which included developing pages, coding and show all kind of film with details for every one with full response for web and mobile , Built with Html,css, js, Nextjs, talwindcss, "},
 
 
 
 


    ]
  return (
    <div className='h-[120vh] relative overflow-hidden flex flex-col text-left md:flex-row
    max-w-full justify-evenly  mx-auto items-center z-0'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
            Project    
        </h3> 
        <div className="overflow-x-scroll relative w-full flex overflow-y-hidden snap-x snap-mandatory z-20 example" ref={input}>
            {projects.map((project ,i)=>(
                <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 relative items-center  justify-center p-20 md:p-44 h-screen'>
                    <img  
                    className="rounded-lg w-60 h-"
                    src={project.src}
                    alt=""
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className=''>
                                    {i+1} of {projects.length}  {project.name_project}
                                </span>
                                
                            </h4>
                            <p className='text-sm text-center  font-semibold w-[300px] md:text-lg md:w-[600px] ml-7    md:ml-0'>
                              {project.desc }
                            </p>
                            <div className={`text-6xl font-bold absolute  md:right-[40px] lg:right-[150px] top-[50%] hidden md:block  ${i+1==3 ? " md:hidden": ""}`} onClick={nextproject}>{">"}</div>
                    <div className={`absolute text-6xl font-bold md:left-[40px] lg:left-[150px]  top-[50%]  hidden md:block  ${i+1==1 ? " md:hidden": ""}`}   onClick={beforproject}>{"<"}</div>
                            <p className="w-[300px] md:w-[600px]">GitHub Source Code : <a className='text-blue-600  break-words ' target="blanck" href={project.github} >{project.github}</a></p>
                    </div>
                    <div className={`${project.link == "" ? "hidden " : " w-[350px] "}`}>
                        Live Demo :  <a href={project.link} target="blanck" className="text-sm text-red-600 " >{project.link}</a>
                    </div>
                    


                </div>
            ))}

        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10
          left-0 h-[500px] -skew-y-12' />
    </div>
  )
}

export default Project