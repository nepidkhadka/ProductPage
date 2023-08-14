import React from 'react'
import classes from '..//TopBar.module.css'


function TopBar() {
  return (
    <nav className={classes.topbar} >
        <img src="/nav_logo.png" alt="NavBar Logo" />
  </nav>  
  )
}

export default TopBar