import './HeroImage.css';
import Image from "../assets/image.jpg";
import { Link } from 'react-router-dom';

import React from 'react'

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={Image} alt="Bakground-image" />
        </div>
        <div className='content'>
            <h1>Hello I'm a <br></br>Full Stack Developer</h1>
            <Link to="/project" className='btn'>Project</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
    </div>
  )
}

export default HeroImage