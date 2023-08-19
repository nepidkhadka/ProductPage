import React from 'react'
import classes from '..//projectPreview.module.css'

const ProjectPreview = (props) => {

    const mydate = new Date();
    let hrs = mydate.getHours() ;
    hrs = hrs%12;
    hrs = hrs || 12;
    hrs = hrs.toString().padStart(2,'0');
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
