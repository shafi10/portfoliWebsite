import React,{Fragment} from 'react';
import image from '../image/pc1.png';


const Landing = ()=>{
    return(
      <Fragment>
        <section className="main">
            <h1>Hello,</h1>
            <h1>I am Md. Shafiul Islam</h1>
            <p>Software Engineer</p>
        </section>
        <div className="assets-side">
            <img src={image} alt="" />
        </div>
      </Fragment>
    )
}

export default Landing