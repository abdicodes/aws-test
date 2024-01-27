'use client'

import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import 'swiper/css'

const WorkSliderBtns = () => {
  const swiper = useSwiper()

  const styles = {
    containerStyles: `flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
    xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none`,

    leftBtnStyles: `text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all 
   ${swiper.isBeginning ? 'bg-white/60' : 'bg-accent hover:bg-accent-hover'} `,

    rightBtnStyles: `text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all 
   ${swiper.isEnd ? 'bg-white/60' : 'bg-accent hover:bg-accent-hover'} `,
  }
  return (
    <div className={styles.containerStyles}>
      <button
        className={styles.leftBtnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className={styles.rightBtnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  )
}

export default WorkSliderBtns
