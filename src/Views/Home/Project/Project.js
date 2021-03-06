import React from 'react';
import { NavLink } from 'react-router-dom';
import { forwardRef } from 'react/cjs/react.production.min';
import bike from '../../../images/bike.png'
import movie from '../../../images/movie.png'
const Project = (props, ref) => {
    return (
        <div ref={ref} className='project cover' id="projects">
            <div className='draw'>
            <div className='line'></div>
            <div className='line'></div>
            </div>
            <div className='title'>
                <h2>My projects</h2>
                <p>A selection of my best projects.</p>
            </div>
            <div className='project-content'>
                <div className='project-content-cover'>
                    <div className='project-item'>
                        <a href="https://zhoangp.github.io/Bike__Project__NHP/" target="_blank">
                    <img src={bike} alt="bike" />
                    </a>
                    </div>
                    <div className='project-item'>
                        <a href="https://movie-wheat.vercel.app/" target="_blank" >
                    <img src={movie} alt="movie" />
                    </a>

                    </div>
                </div>
            </div>
            <div className='project-curious'>
                <p>Curious about the process?</p>
                <a href='https://github.com/Zhoangp' target="_blank"><p>Visit my Github</p></a>
            </div>
        </div>
    );
};

export default forwardRef(Project);