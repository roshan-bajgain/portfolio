import './WorkCardstyle.css';

import React from 'react';
import { Link } from 'react-router-dom';

const WorkCard = (props) => (
  <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
      <p>{props.text}</p>
      <div className="pro-btns">
        <a href={props.view} className="btn" target="_blank">Live-demo</a>
        <a href={props.source} className="btn" target="_blank">Source</a>
      </div>
    </div>
  </div>
);

export default WorkCard;
