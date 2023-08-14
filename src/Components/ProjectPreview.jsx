import React from 'react'
import classes from '..//projectPreview.module.css'

const ProjectPreview = (props) => {

    const mydate = new Date();
    const hrs = mydate.getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const mins = mydate.getMinutes() > 0 ? new Date().getMinutes() : '0' + new Date().getHours();



    return (
        <div className={classes.ProductPreview} >
            <img src={props.img} alt="Product Preview" />

            {
                props.showHeartBeat ?

                    <div className={classes.heartBeat} >
                        <img src="/heart.png" alt="" />
                        <p>{Math.ceil(Math.random() * 90)}</p>
                    </div>
                    :
                    <div>
                        <p className={classes.productTime} >{`${hrs}:${mins}`}</p>
                    </div>

            }



        </div>
    )
}

export default ProjectPreview
