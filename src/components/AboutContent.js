import './AboutContentStyle.css';

import React from 'react'
import { Link } from 'react-router-dom';
import react1 from '../assets/react.png'
import Rails from '../assets/rails.png'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a full-stack developer. I create responsive secure website for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
                </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="React image" />
                </div>
                <div className="img-stack bottom">
                    <img src={Rails} className="img" alt="Rails image" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AboutContent