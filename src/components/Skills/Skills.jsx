import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { skillList } from './../../assets/skillsData';
import './Skills.css';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className='section-container'>
            <Header
            heading="My Skills."
            details="Passionate about new technologies, I'm constantly learning, here's the tech stacks I've worked with!"
            />

            <div className='skill-card-container'>
                {skillList.map(({ skillName, skillUrl }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} />
                ))}
            </div>

            <FooterLink phrase="Get in " link="touch." toAdress="/contact" />
        </div>
    );
};

export default Skills;