import React from 'react'
import classes from '..//ProductData.module.css'


function ProductDataDetails(props) {

  // console.log(props.data);

  const colorOptions = props.data.colorOptions.map((items, pos)=>{

    const classArr = [classes.ProductImg];
    if(pos == 0){
      classArr.push(classes.selectedimg);
    }

    return(
      <img key={pos} className={classArr.join(' ')} src={items.imageUrl} alt={items.styleName} />
     );
  })

  const featureList = props.data.featureList.map((items,pos)=>{

    const classArr = [classes.featuresBtn]

    if(pos == 0){
        classArr.push(classes.selectedFeatureItem);
    }

    return(
      <button key={pos} className={classArr.join(' ')}>{items}</button>

    )
  })

  console.log(featureList);
  return (
    <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDesc}>{props.data.description}</p>
          <h3 className={classes.SectionHeading} >Select Color :</h3>
          <div>
            {colorOptions}
            {/* <img className={[classes.ProductImg, classes.selectedimg].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black" />
            <img className={classes.ProductImg} src="https://imgur.com/PTgQlim.png" alt="Red" />
            <img className={classes.ProductImg} src="https://imgur.com/Mplj1YR.png" alt="Blue" />
            <img className={classes.ProductImg} src="https://imgur.com/xSIK4M8.png" alt="Purple" /> */}
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}
            {/* <button className={[classes.featuresBtn, classes.selectedFeatureItem].join(' ')} >Time</button>
            <button className={classes.featuresBtn} >Heart Rate</button> */}
          </div>
          <button className={classes.primaryBtn} >Buy Now</button>
        </div>
  )
}

export default ProductDataDetails