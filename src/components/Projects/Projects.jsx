import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import {projectsData} from './../../assets/projectData'
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header 
                heading="My Projects."
                details="Some of the projects I've been working on"
                />

                <div className="project-cards-container">
                   {projectsData.map(({
                       projectName,
                       projectDescription,
                       imageUrl,
                       projectUrl
                   }) => {
                       return <ProjectCard
                        projectName={projectName}
                        projectDescription={projectDescription}
                        ProjectUrl={projectUrl}
                        imageUrl={imageUrl} />
                   })}
                </div>

                <FooterLink phrase="Check out " link="my skills!" toAdress="/skills" />
        </div>
    );
};

export default Projects;