import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type SocialProps = {
  containerStyles?: string
  iconStyle?: string
}

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedin />, path: '' },
]

const Social = ({ containerStyles, iconStyle }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
