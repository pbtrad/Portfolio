import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './About.css';
import egg from './../../assets/egg.jpeg';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Programmer | Musician | Artist'
            />

<div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Programmer</h3>
                    <p className='about-details'>
                        I decided to have a curious look at what computer programming is and I found the amazing world of programming languages and the endless possibilities of creation. Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/pbtrad'
                        >
                            my github profile.
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Musician</h3>
                    <p className='about-details'>
                        I've been a professional musician since 2006 playing traditional Irish music on guitar. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://pbtrad.github.io/Paul-Browne-User-Centric-Front-End-Project/'
                        >
                            my music site.
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    {/*<h3 className='about-sub-head'>Public Speaker</h3>
                    <p className='about-details'>
                        Being a passionate public speaker, I've given talks at
                        more than 75 events till now! Want me to speak in your
                        event?{' '}
                        <a
                            className='about-link-element'
                            href='mailto:info@theleanprogrammer.com'
                        >
                            Email me the details!
                        </a>
    </p>*/}
                </div>

                <div className='about-main-right'>
                    <img
                        src={egg}
                        alt='egg'
                        className='about-anime'
                    />
    </div>
            </div>

            <FooterLink
                phrase="Check out my "
                link="projects!"
                toAdress="/projects"
                />
        </div>
    );
};

export default About;