import React,{Fragment} from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Fragment>
         <Navbar />
         <Route exact path='/' component={Landing} />
         <section className='container'>
           <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
           </Switch>
         </section>
         <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
