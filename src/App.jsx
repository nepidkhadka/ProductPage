import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {

  const mydate = new Date();
  const hrs = mydate.getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  
  const mins = mydate.getMinutes() > 0 ? new Date().getMinutes() : '0' + new Date().getHours();


  return (
    <>
      <nav className={classes.topbar} >
        <img src="/nav_logo.png" alt="NavBar Logo" />
      </nav>
      <div className={classes.MainContainer}>

        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
          {/* <div>
            <p className={classes.productTime} >{`${hrs}:${mins}`}</p>
          </div> */}
          <div className={classes.heartBeat} >
            <img src="/heart.png" alt="" />
            <p>{Math.ceil(Math.random()*90)}</p>
          </div>
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
            <button className={classes.featuresBtn} >Heart Rate</button>
          </div>
          <button className={classes.primaryBtn} >Buy Now</button>
        </div>

      </div>
    </>
  )
}
export default App
