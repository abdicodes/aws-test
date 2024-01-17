'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import React from 'react'

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="w-[298px] h-[108px] xl:w-[498px] xl:h-[498px]
        "
        >
          <Image
            src="/images/photo.png"
            alt="avatar"
            className="object-contain"
            priority
            quality={100}
            fill
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
