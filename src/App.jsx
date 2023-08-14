import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import classes from './App.module.css';
import ProductData from './ProductData';
import ProjectPreview from './Components/ProjectPreview';
import ProductDataDetails from './Components/ProductDataDetails';
import TopBar from './Components/TopBar';

function App() {

  const showHeartBeat = false;
  const PreviewImage = 'https://imgur.com/iOeUBV7.png';


  return (
    <>
      <TopBar/>
      <div className={classes.MainContainer}>
      <ProjectPreview img={PreviewImage} showHeartBeat={showHeartBeat} />
      <ProductDataDetails data={ProductData} />
       
      </div>
    </>
  )
}

export default App
