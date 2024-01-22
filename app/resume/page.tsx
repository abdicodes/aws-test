'use client'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCsharp,
  SiDotnet,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiGraphql,
} from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
  tile: 'About me',
  description: `A Full-stack web and mobile app developer, as well as a machine learning engineer, driven by a deep passion for solving complex problems. `,
}

const info = [
  {
    fieldName: 'Name',
    fieldValue: 'Abdirahman Ali Suldaan',
  },

  {
    fieldName: 'Phone',
    fieldValue: '(+358) 44 920 8411',
  },
  {
    fieldName: 'LinkedIn',
    fieldValue: 'https://www.linkedin.com/in/suldaan/alue',
  },
  {
    fieldName: 'Email',
    fieldValue: 'suldaan.89@hotmail.com',
  },
  {
    fieldName: 'Freelancing',
    fieldValue: 'Available',
  },
]

const experience = {
  icon: '/images/resume/experienve.png',
  title: 'My experiences',
  description: 'My work experiences both in technical and non-technical roles.',
  items: [
    {
      company: 'Abdi trading Oy',
      position: 'Entreprenuer',
      duration: '2022-present',
    },
    {
      company: 'Deepcode Innovations Ltd',
      position: 'Trainee web developer',
      duration: '02-2023-08-2023',
    },
    {
      company: 'Posti Oyj',
      position: 'Mail hanlding',
      duration: '2017-2021',
    },
  ],
}

const education = {
  icon: '/images/resume/education.png',
  title: 'My education',
  description: 'Courses and degrees obtained ',
  items: [
    {
      institution: 'Goldsmith University of London',
      degree: 'Bachelor of Computer Science',
      duration: '2020-2024',
    },

    {
      institution: 'University of Helsinki',
      degree: 'Fullstack open (14credits)',
      duration: '2022-present',
    },
    {
      institution: 'IBM',
      degree: 'Data Science Professional certificate',
      duration: '2022',
    },
    {
      institution: 'IBM',
      degree: 'AI engineering Professional certificate',
      duration: '2022',
    },
  ],
}

const skills = {
  title: 'My skills',
  decsription: 'Skills that I can use professionally',
  skillsList: [
    { icon: <FaHtml5 />, name: 'HTML 5' },
    { icon: <FaCss3 />, name: ' CSS 3' },

    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind.css' },
  ],
}
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
