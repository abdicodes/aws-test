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
      duration: '2022 - present',
    },
    {
      company: 'Deepcode Innovations Ltd',
      position: 'Trainee web developer',
      duration: '02-2023 - 08-2023',
    },
    {
      company: 'Posti Oyj',
      position: 'Mail hanlding',
      duration: '2017 - 2021',
    },
  ],
}

const education = {
  icon: '/images/resume/education.png',
  title: 'My education',
  description: 'Courses and degrees obtained ',
  items: [
    {
      institution: 'University of London',
      degree: 'Bachelor of Computer Science',
      duration: '2020 - 2024',
    },

    {
      institution: 'University of Helsinki',
      degree: 'Fullstack open (14credits)',
      duration: '2022 - 2023',
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
  decsription: 'Technologies that I can use professionally',
  skillsList: [
    { icon: <FaHtml5 />, name: 'HTML 5' },
    { icon: <FaCss3 />, name: ' CSS 3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind.css' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiPostgresql />, name: 'Postgres' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <SiDotnet />, name: 'ASP.NET' },
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 mx-4
                        rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 mx-4
                        rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-l max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.decsription}
                  </p>
                </div>
                <ul className="grid ">
                  {skills.skillsList.map((skill, index) => {
                    return <li key={index}>{skill.name}</li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
