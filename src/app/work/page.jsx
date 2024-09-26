"use client";

import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio dolorum natus.",
    stack: [{ name: "React.js"}, { name: "Tailwind.Css" }, { name: "Javascript" }],
    image: "/assets/work/hekto1.png",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio dolorum natus.",
    stack: [{ name: "Next.js"}, { name: "Css 3" }, { name: "Node.js" }],
    image: "/assets/work/chat3.png",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio dolorum natus.",
    stack: [{ name: "Html 5"}, { name: "Tailwind.Css" }],
    image: "/assets/work/finsweet1.png",
    live: "",
    github: ""
  },

];

const work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay:2.4, duration: 0.4, ease: "easeIn" },

      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className='flex flex-col h-[50%] gap-[30px]'>
              {/* outline num */}
              <div className='text-4xl xl:text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[28px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} Project
              </h2>
              {/* project description */}
              <p className='text-white/60 text-[12px] xl:text-[16px]'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-2 xl:gap-4'>
                {project.stack.map((item,index)=>{
                  return(
                    <li key={index} className='text-[13px] xl:text-[20px] text-accent'>
                      {item.name}
                       {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                    
                  ); 
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className='flex items-center xl:gap-4 gap-2'>
                {/* Live project button */}
              <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='xl:w-[70px] xl:h-[70px] w-[35px] h-[35px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-xl xl:text-3xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='xl:w-[70px] xl:h-[70px] w-[35px] h-[35px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white xl:text-3xl text-xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween ={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=>{
                return(
                  <SwiperSlide key={index} className='w-full'>
                    <div className="h-[300px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="xl:object-cover"
                          alt=""
                          
                        />

                      </div>
                    </div>
                    
                  </SwiperSlide>
                ) 
              })}
               {/* slider button */}
               <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[140px] z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />


            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default work