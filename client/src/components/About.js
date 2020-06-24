import React,{Fragment} from 'react';


const About = ()=>{
    const btnClick = () =>{
        window.open("https://www.facebook.com");
    }
    const gitClick = () =>{
        window.open("https://github.com/shafi10");
    }
    const linClick = () =>{
        window.open("https://www.linkedin.com/in/md-shafiul-islam-521b21169/");
    }
    return(
      <Fragment>
          <section className="about">
                    <h1>About</h1>
                    <p>I am a backend web developer, I have built several server-side web application logic and
                        integration of the work front-end web developers do.</p>
                    <a href="#">
                    Curriculum vitae</a>
                    <ul className="list" >
                        <li><button onClick={btnClick}>Facebook</button></li>
                        <li><button onClick={gitClick}>Github</button></li>
                        <li><button onClick={linClick}>Linkedin</button></li>
                    </ul>
                </section>
      </Fragment>
    )
}

export default About