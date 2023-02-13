import './HeroImage.css';
import { Link } from 'react-router-dom';

import React from 'react';
import Image from '../assets/image.png';

const HeroImage = () => (
  <div className="hero">
    <div className="mask">
      <img className="intro-img" src={Image} alt="Bakground-image" />
    </div>
    <div className="content">
      <h1>
      I’m Roshan
        <br />
        Glad to see you!
      </h1>
      <p className="paragraph">I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
      <Link to="/project" className="btn">Project</Link>
      <Link to="/contact" className="btn btn-light">Contact</Link>
    </div>
  </div>
);

export default HeroImage;
