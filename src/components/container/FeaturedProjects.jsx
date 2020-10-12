import React from 'react';
import '../../assets/styles/containers/featuredProjects.css';

import { FeaturedProjectsData } from '../../assets/FeaturedProjects.js';
import { FeaturedProject } from '../molecules';
import { Title, GreenText } from '../atoms';
import CodeIcon from '../../assets/img/code.svg';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main className="FeaturedProjects">
      <div>
        <div className="FeaturedProjects-Title">
          <h1>PROJECTS</h1>
          <img src={CodeIcon} alt="Code icon" width="40px" height="40px" />
        </div>
        <div className="ProjectsHomeSection-Description">
          <p>
            I improve mi skills <strong>building projects</strong>, in this
            section you will find my best projects, including a{' '}
            <strong>demo</strong> of the project and its <strong>code</strong>.
          </p>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
      <div className="FeaturedProjects-project-container">
        {FeaturedProjectsData.map((project) => (
          <FeaturedProject
            key={project.ID}
            projectTitle={project.title}
            projectImage={project.image}
            projectDescription={project.Description}
            projectCode={project.Repo}
            projectDemo={project.demo}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
