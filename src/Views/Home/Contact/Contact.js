import React from 'react';
import { NavLink } from 'react-router-dom';
import { forwardRef } from 'react/cjs/react.production.min';

const Contact = (props, ref) => {
    return (
        <div ref={ref} className='contact cover' id="contact">
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

export default forwardRef(Contact);