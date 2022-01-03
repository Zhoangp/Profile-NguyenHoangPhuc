import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Intro from './Intro/Intro';
import Services from './Services/Services';

const Home = () => {
    return (
        <Fragment>
            <Intro/>
            <Services/>
        </Fragment>
    );
};

export default Home;