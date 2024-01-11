import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24 "
        >
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Abdirahman Suldaan</span>
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
              {/* <div>socials</div> */}
            </div>
          </div>

          {/* photo */}
          {/* <div>photo</div> */}
        </div>
      </div>
    </section>
  )
}
