import React from 'react';
import { NavLink } from 'react-router-dom';
import bike from '../../../images/bike.png'
import movie from '../../../images/movie.png'
const Project = () => {
    return (
        <div className='project cover'>
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
        </div>
    );
};

export default Project;