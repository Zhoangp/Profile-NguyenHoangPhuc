import React, {useRef, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Contact from './Contact/Contact';
import About from './About/About';
import Intro from './Intro/Intro';
import Project from './Project/Project';
import Services from './Services/Services';
import { forwardRef } from 'react/cjs/react.production.min';
import Footer from '../../Template/HomeTemplate/Footer/Footer';

const Home = (props, listRefs) => {
    const arr = [
        Intro, Services, Project, About, Contact
    ]
    const addToRef = (el) => {
        if(el && !listRefs.current.includes((el))) {
            listRefs.current.push(el)
        }
}
    return (
        <Fragment>

            {listRefs.current.length === 0 ? arr.map((Item, index) => {
                return <Item key={index} ref={addToRef}/>
            }) :    arr.map((Item, index) => {
                return <Item key={index}/>
            })}
      <Footer />

        </Fragment>
    );
};

export default forwardRef(Home);