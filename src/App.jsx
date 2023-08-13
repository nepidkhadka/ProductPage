import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <>
      <nav className={classes.topbar} >
        <img src="/nav_logo.png" alt="NavBar Logo" />
      </nav>
      <div className={classes.MainContainer}>

        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="" />
        </div>

        <div className={classes.ProductData}>
          <h1>{ProductData.title}</h1>
        </div>

      </div>
    </>
  )
}
export default App
