import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import ScreenEgg from "../ScreenEgg";

const BuyMeCoffe = ({
  className,
  type,

}) => {
  return (
    <ScreenEgg type='right'>
      <div className={cl(styles.buyMeCoffee, className)}>
        <a
          href='/'
          target="_blank"
          className={styles.buyMeCoffeeButton}
          rel="noopener"
        >
          Buy me a coffe...
        </a>
      </div>
    </ScreenEgg>
    
  )
}

export default BuyMeCoffe