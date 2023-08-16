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

  // const showHeartBeat = false;
  // const PreviewImage = 'https://imgur.com/iOeUBV7.png';   
  
  const [PreviewImage, setPreviewImage] = useState(0)
  const handleColorOptionClick = (pos) =>{
    // const updatedImage = ProductData.colorOptions[pos].imageUrl
    setPreviewImage(pos);
  }
  
  const [showHeartBeat, setshowHeartBeat] = useState(false)
  const handleFeaturedItemsClick = (pos) =>{
    let updatedClickValue="";
      if(pos == 1){
       updatedClickValue = true;
      }
      setshowHeartBeat(updatedClickValue);
    }

  return (
    <>
      <TopBar/>
      <div className={classes.MainContainer}>
      <ProjectPreview img={ProductData.colorOptions[PreviewImage].imageUrl} showHeartBeat={showHeartBeat}/>
      <ProductDataDetails currentImagePosition={PreviewImage}  onColorOptionClick={handleColorOptionClick} onFeaturedItemsClick={handleFeaturedItemsClick} HeartBeatValue={showHeartBeat} data={ProductData}/>
       
      {/* <button style={{ background:"red", color: "green", position:"absolute"}} onClick={updateshowHeartBeat}>Click ME</button> */}
      </div>
    </>
  )
}

export default App
