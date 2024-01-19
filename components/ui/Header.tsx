import Link from 'next/link'
import { Button } from './button'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="pt-4 pb-4 xl:pb-6 px-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Abdi
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop nav */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}

        <div className=" xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
