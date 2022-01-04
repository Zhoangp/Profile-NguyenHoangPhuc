import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Contact from '../Contact/Contact';
import About from './About/About';
import Intro from './Intro/Intro';
import Project from './Project/Project';
import Services from './Services/Services';

const Home = () => {
    return (
        <Fragment>
            <Intro/>
            <Services/>
            <Project/>
            <About/>
            <Contact/>
        </Fragment>
    );
};

export default Home;