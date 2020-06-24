import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';


const Navbar = ()=>{
    let blue = {
        color:'cornflowerblue'
    }
    return(

      <Fragment>
          <nav className="navbar bg-dark">
          <h1>
            <Link to='/' style ={blue}>Home</Link>
           </h1>
           <ul>
             <li><Link to='/about'>About</Link></li>
             <li><Link to='/skills'>Skills</Link></li>
             <li><Link to='/projects'>Projects</Link></li>
             <li><Link to='/contact'>Contact</Link></li>
          </ul>
          </nav>
      </Fragment>
    )
}

export default Navbar