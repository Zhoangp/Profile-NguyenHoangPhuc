import React from 'react';
import { forwardRef } from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Intro = (props, ref)=> {

    return (
        <div className='home' id="intro" ref={ref}>
            <div className='home-background'>
                <div className='home-avt'>
                    <div className='avt-img'></div>
                </div>
                <div className='home-name'>
                    <div className='home-name-left'>👋</div>
                    <div className='home-name-right'>Hi! I am <span>Phuc</span></div>
                </div>
                <div className='home-design'>
                    <div className='home-design-content'>UI Designer 📐</div>
                </div>
                <div className='home-age'>
                    <div className='home-age-content'>18 years old 👀</div>
                </div>
                <div className='home-title'>
                    <h1>Front-End Developer</h1>
                    <h2>In Ho Chi Minh, VietNam</h2>
                </div>
                <div className='home-contact'>
                <NavLink to="/contact">Let's work<i className="fas fa-chevron-right"></i></NavLink>

                </div>
            </div>
        </div>
    );
};

export default forwardRef(Intro);