'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import React from 'react'

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          {' '}
          <Image
            src="/images/photo.png"
            alt="avatar"
            className="object-contain"
            priority
            quality={100}
            fill
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Photo
