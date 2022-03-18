import React from 'react'
import Styles from './header.module.css'

function Header() {
  return (
    <div className={`${Styles.navigation} container`}>
        <div>Logo</div>
        <div className={Styles.navBox}>
            <div className={Styles.nav_items}>Home</div>
            <div className={Styles.nav_items}>About</div>
            <div className={Styles.nav_items}>Portfolio</div>
            <div className={Styles.nav_items}>Resume</div>
            <div className={Styles.nav_items}>Contact</div>
        </div>
    </div>
  )
}

export default Header