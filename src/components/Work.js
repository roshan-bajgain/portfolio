import './WorkCardstyle.css';
import WorkCard from './WorkCard';
import WorkCarddata from'./WorkCardData';

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            Projects
        </h1>
        <div className="project-container">
            {WorkCarddata.map((val,ind) => {
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.Source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work;