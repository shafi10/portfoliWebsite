import React,{Fragment} from 'react';
import jspic from '../image/js.png';
import node from '../image/node.png';
import expres from '../image/express.png';
import mongo from '../image/mongo.png';
import mongoose from '../image/mon.png';
import boot from '../image/boot.jpg';
import react from '../image/react.png';
import redux from '../image/redux.png';

const Skills = () =>{
    return (
         <Fragment>
             <section className="skills">
                    <h1>Development Skills</h1>
                    <p>I am a JavaScript developer. I can work with the Node Js framework
                        like Express Js. I can usually create RESTful APIs using Node Js. I use the MongoDB database
                        for backend development. I am looking for a position
                        where I can progress and challenge my skills.</p>
                    <div className="skills-card">
                        <div className="html">
                            <img src={jspic} alt="" />
                            <h3>Javascript</h3>
                            <p>Experience: Less than a year</p>
                        </div>
                        <div className="css">
                            <img src={node} alt="" />
                            <h3>Node Js</h3>
                            <p>Experience: Less than a year</p>
                        </div>
                        <div className="javascript">
                            <img src={expres} alt="" />
                            <h3>Express Js</h3>
                            <p>Experience: Less than a year</p>
                        </div>
                        <div className="MongoDB">
                            <img src={mongo} alt="" />
                            <h3>MongoDb</h3>
                            <p>Experience: Less than a year</p>
                        </div>
                        <div className="bootstrap">
                            <img src={boot} alt="" />
                            <h3>Bootstrap4</h3>
                            <p>Experience: Less than a year</p>
                        </div>
                        <div className="Mongoose">
                            <img src={mongoose} alt="" />
                            <h3>Mongoose</h3>
                            <p>Experience: Less than a year</p>
                        </div>
                        <div className="react">
                            <img src={react} alt="" />
                            <h3>React Js</h3>
                            <p>Experience: Less than a year</p>
                        </div>
                        <div className="redux">
                            <img src={redux} alt="" />
                            <h3>React Redux</h3>
                            <p>Experience: Less than a year</p>
                        </div>
                    </div>
                </section>
         </Fragment>
    )
}

export default Skills


