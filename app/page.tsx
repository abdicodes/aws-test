import { Button } from '@/components/ui/button'
import Social from '@/components/ui/Social'
import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'
import Photo from '@/components/ui/Photo'
import Stats from '@/components/ui/Stats'

export default function Home() {
  return (
    <section className="h-full relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Abdirahman S.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at solving problems and crafting elegant digital
              experiences.
              <br />I am proficient in various technologies mainly Fullstack web
              and mobile apps development.
            </p>
            {/* socials links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span> Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyle="w-9 h-9 border 
                border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}
