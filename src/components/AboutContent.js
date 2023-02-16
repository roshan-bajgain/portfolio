import './AboutContentStyle.css';

import React from 'react';
import { Link } from 'react-router-dom';
import react1 from '../assets/react.png';
import Rails from '../assets/rails.png';

const AboutContent = () => (
  <>
  <div className="about">
    <div className="left">
      <h1>Who am I?</h1>
      <p>I’m a software developer! I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coding, don’t hesitate to contact me.</p>
      <Link to="/contact">
        <button className="btn" type="submit">Contact</button>
      </Link>
    </div>
    <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src={react1} className="img" alt="React" />
        </div>
        <div className="img-stack bottom">
          <img src={Rails} className="img" alt="Rails" />
        </div>
      </div>
    </div>
  </div>
  <h2 className="head">SKILLS</h2>
  <hr></hr>
  <div className="container">
    <div className="card">
      <div className="box">
        <div className="content">
          <h2>Language</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Ruby</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="box">
        <div className="content">
          <h2>Framework</h2>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="box">
        <div className="content">
          <h2>Tools & Methods</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Remote Pair-Programming</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </>
  
);

export default AboutContent;
