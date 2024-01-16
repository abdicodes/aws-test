import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type SocialProps = {
  containerStyles?: string
  iconStyle?: string
}

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/abdicodes' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/suldaan/' },
]

const Social = ({ containerStyles, iconStyle }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
