'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget libero quis felis rhoncus ultricies nec in nunc. Curabitur efficitur efficitur semper. Etiam non dui euismod, tempus tellus eu, viverra tortor. Integer convallis ipsum quis nibh posuere porta',
  },
  {
    num: '02',
    title: 'DevOps',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget libero quis felis rhoncus ultricies nec in nunc. Curabitur efficitur efficitur semper. Etiam non dui euismod, tempus tellus eu, viverra tortor. Integer convallis ipsum quis nibh posuere porta',
  },
  {
    num: '03',
    title: 'Big data analysis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget libero quis felis rhoncus ultricies nec in nunc. Curabitur efficitur efficitur semper. Etiam non dui euismod, tempus tellus eu, viverra tortor. Integer convallis ipsum quis nibh posuere porta',
  },
  {
    num: '04',
    title: 'ML and LLM models engineering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget libero quis felis rhoncus ultricies nec in nunc. Curabitur efficitur efficitur semper. Etiam non dui euismod, tempus tellus eu, viverra tortor. Integer convallis ipsum quis nibh posuere porta',
  },
]
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className=""
        >
          {services.map((service, index) => {
            return (
              <div key={index}>
                <div>{service.num}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
