'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type PageTransitionProps = {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
        }}
        className="min-h-screen w-screen fixed bg-primary "
      >
        <div> {children}</div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
