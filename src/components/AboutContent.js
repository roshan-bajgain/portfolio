import './AboutContentStyle.css';

import React from 'react';
import { Link } from 'react-router-dom';
import react1 from '../assets/react.png';
import Rails from '../assets/rails.png';

const AboutContent = () => (
  <div className="about">
    <div className="left">
      <h1>Who am I?</h1>
      <p>Hello I’m a web developer! I can help you build a product , feature or website Look through some of my work! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
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
);

export default AboutContent;
