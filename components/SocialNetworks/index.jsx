import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import { AiFillYoutube, AiFillGithub, AiFillTwitterCircle, AiFillInstagram  } from "react-icons/ai";
import ScreenEgg from "../ScreenEgg";

const socialNetworks = [
  {
    id: 1,
    href: 'https://www.youtube.com/',
    icon: AiFillYoutube
  },
  {
    id: 2,
    href: 'https://www.youtube.com/',
    icon: AiFillGithub
  },
  {
    id: 3,
    href: 'https://www.youtube.com/',
    icon: AiFillTwitterCircle
  },
  {
    id: 4,
    href: 'https://www.youtube.com/',
    icon: AiFillInstagram
  }
]

const SocialNetworks = ({
  className
}) => {
  return (
    <ScreenEgg type='left'>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetworks) => (
          <li key={socialNetworks.id}
            className={styles.listItem}
          >
            <a
              href={socialNetworks.href}
              target="_blank"
              className={styles.listLink}
            >
              {React.createElement(
                socialNetworks.icon,
                {
                  color: 'black',
                  size: 50
                }
              )}
            </a>


          </li>
        ))}
      </ul>
    </ScreenEgg>
    
  )
}

export default SocialNetworks