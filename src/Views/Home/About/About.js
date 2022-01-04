import React from 'react';
import sticker from '../../../images/IMG_3452.PNG'

const About = () => {
    return (
        <div className='about cover' id="about">
            <div className='draw'>
                <div className='line'></div>
            </div>
            <div className='about-title title'>
                <h2>About me</h2>
                <p>Welcome to Phuc's World</p>
            </div>
            <div className='about-content'>
                <div className='about-content-cover'>
                <div className='about-content-card'>
                    <div className='about-item'>
                        <h3>Education</h3>
                        <p>Studying at Ho Chi Minh City University of Technology</p>
                    </div>
                    <div className='about-item'>
                        <h3>Figma</h3>
                        <p>Interface design using figma. Convert Figma to HTML/CSS.</p>
                    </div>
                    <div className='about-item'>
                        <h3>Networking</h3>
                        <p>Created a plataform on Instagram to share my journey and connect with everyone</p>
                    </div>
                    <div className='about-item'>
                        <h3>Music & Games</h3>
                        <p>Listen to edm music in my free time. I also enjoy playing videogames as a hobby</p>
                    </div>
                </div>
                <div className='about-content-img'>
                    <img src={sticker} alt="sticker" />
                </div>
                </div>
            </div>
            <div className='about-end'>
                <p>Multitalented. Intuitive. Dedicated.</p>
                <div><a href="https://www.instagram.com/phut.exe/" target="_blank"><p>Wanna know more? Visit my Instagram</p></a></div>
            </div>
            
        </div>
    );
};

export default About;