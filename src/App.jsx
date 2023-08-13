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
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDesc}>{ProductData.description}</p>
          <h3 className={classes.SectionHeading} >Select Color :</h3>
          <div>
            <img className={[classes.ProductImg, classes.selectedimg].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black" />
            <img className={classes.ProductImg} src="https://imgur.com/PTgQlim.png" alt="Red" />
            <img className={classes.ProductImg} src="https://imgur.com/Mplj1YR.png" alt="Blue" />
            <img className={classes.ProductImg} src="https://imgur.com/xSIK4M8.png" alt="Purple" />
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={[classes.featuresBtn, classes.selectedFeatureItem].join(' ')} >Time</button>
            <button className={classes.featuresBtn} >HeartRate</button>
          </div>
          <button className={classes.primaryBtn} >Buy Now</button>
        </div>

      </div>
    </>
  )
}
export default App
