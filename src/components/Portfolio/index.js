import { React, useState } from 'react';
import SingleProject from '../SingleProject';

function Portfolio() {
  const [projects] = useState([
    
    {
      name: "go-fish",
      display: "Go Fish",
      liveURL: "https://go-fish-project-two.herokuapp.com/",
      gitURL: "https://github.com/noreikam/go-fish"
    },
    
    {
      name: "workday-scheduler",
      display: "Work Day Scheduler",
      liveURL: "https://kennethhollis.github.io/Day-Scheduler/",
      gitURL: "https://github.com/KennethHollis/Day-Scheduler"
    },
    {
      name: "team-generator",
      display: "Team Generator",
      liveURL: "https://kennethhollis.github.io/Team-Profile-Generator/",
      gitURL: "https://github.com/KennethHollis/Team-Profile-Generator"
    },
 
    {
      name: "password-generator",
      display: "Password Generator",
      liveURL: "https://kennethhollis.github.io/Password-Generator/",
      gitURL: "https://github.com/KennethHollis/Password-Generator"
    }
  ])

  return(
    <div className="flex-row footer-space">
      <h1>Portfolio</h1>
      <div  className="flex-row container">
        {projects.map((project) => (
          <SingleProject 
            project={project}
            key={project.name}
            />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;