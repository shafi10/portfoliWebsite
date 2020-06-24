import React ,{ Fragment} from 'react';

const Projects = ()=>{

    const roadAccident = () =>{
        window.open("https://road-accident-app.herokuapp.com/");
    }
    const shopping = () =>{
        window.open("https://javascriptshoppingcart.netlify.app/");
    }

    return (
      <Fragment>
         <section className="projects">
             <div>
            <h1>1. ROAD ACCIDENT STATISTICS SYSTEM</h1>
            <p>This web application mainly works with the chart, location accidents in Google map
             and poll system.</p>
             <button onClick ={roadAccident}>Live Demo</button>
             </div>

             <div>
            <h1>2. SHOPPING CART SYSTEM</h1>
            <p>I use javascript for this project. This a simple web project on shopping cart system.</p>
             <button onClick ={shopping}>Live Demo</button>
             </div>
         </section>
      </Fragment>
    )
}

export default Projects


