'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import WorkSliderBtns from '@/components/ui/WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'Fullstack',
    title: 'HealthEase',
    description:
      'a patient data management where healthcare providers can manage appointmnets, lab and scan work and prescriptions. fully containerized.',
    stack: [
      { name: 'TypeScript' },
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Postgres' },
      { name: 'TailwindCss' },
      { name: 'Docker' },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: 'https://github.com/abdicodes/Health-Ease',
  },
  {
    num: '02',
    category: 'Desktop',
    title: 'DJ App ',
    description:
      'Audio-Mixer application that can load, play and mix audio tracks',
    stack: [{ name: 'C++' }, { name: 'JUICE' }],
    image: '/assets/work/thumb2.png',
    live: '',
    github: 'https://github.com/abdicodes/DJApp',
  },

  {
    num: '03',
    category: 'Mobile App',
    title: 'Rate repositories',
    description: 'A mobile app to rate Github repositories and leave reviews. ',
    stack: [
      { name: 'Javascript' },
      { name: 'Css' },
      { name: 'React Native' },
      { name: 'Apollo GraphQL' },
    ],
    image: '/assets/work/thumb3.png',
    live: 'https://www.youtube.com/watch?v=AxTSqwjZKIQ&t=414s',
    github: 'https://github.com/abdicodes/rate-repository-app',
  },
  {
    num: '04',
    category: 'Machine learning',
    title: 'Hate speech detection',
    description:
      'A jupyter notebook that uses dataset of Tweets from X and determines if a tweet contains hate speech',
    stack: [
      { name: 'Python' },
      { name: 'NLP' },
      { name: 'supervised machine learning' },
      { name: 'data visualisation' },
    ],
    image: '/assets/work/thumb4.png',
    live: '',
    github:
      'https://github.com/abdicodes/text-cassification/blob/main/Hate%20speech%20detection.ipynb',
  },
]
const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 mx-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
           order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent
              transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              <h3
                className="text-[28px]  leading-none text-white/80 group-hover:text-accent
              transition-all duration-500 capitalize"
              >
                {project.title}
              </h3>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className=" border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight
                          className="text-white text-3xl
                        group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-white text-3xl
                        group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className="h-[460px] relative group flex justify-center 
                    items-center bg-pink-50/20 "
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              {/* slider button */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
