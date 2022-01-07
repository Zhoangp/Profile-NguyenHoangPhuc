import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact cover' id="contact">
            <div className='draw'>
                <div className='line'></div>
            </div>
            <div className='contact-title'>
                <h3>Let's work together!</h3>
                <NavLink to="/work"><button>Contact me <i className="fas fa-chevron-right"></i></button></NavLink>
            </div>
        </div>
    );
};

export default Contact;