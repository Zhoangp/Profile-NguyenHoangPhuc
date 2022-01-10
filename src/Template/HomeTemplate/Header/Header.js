import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'
import { Link, animateScroll as scroll } from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useRef } from 'react';
import About from '../../../Views/Home/About/About';
import { forwardRef } from 'react';


const Header = (props, refs) => {
    const navigate = useNavigate()
    const location = useLocation()
 
    const  handleClick = async (index) => {
        if(!refs.current) return
        if(location.pathname !== '/') {
           navigate('/') 
           scroll.scrollTo(props.listPos[index], 0)
        }

        
    }
    const [heightList, setHeightList] = useState(false)
    return (
        <Fragment>
        <header className='header'>
            <div className='header-cover'>
            <div  className='header-left'>
                    <Link to="intro" activeClass="active" smooth={true} spy={true} onClick={() => {
                        return handleClick(0)}}>Nguyen Hoang Phuc</Link>
                </div>
                <button className='btn-menu' onClick={() => {
                    setHeightList(!heightList)
                }}><AiOutlineMenu/></button>
    
                <div className={`header-list  ${heightList ? "height-true" : "height-false"}`}>
                    <ul>
                        <li>
                            <Link to="services" smooth={true} spy={true} onClick={() => {
                        return handleClick(1)}}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} spy={true} onClick={() => {
                        return handleClick(2)}}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} spy={true} onClick={() => {
                        return handleClick(3)}}>
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} spy={true} onClick={() => {
                        return handleClick(4)}}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`header-right`} >
                    <NavLink to="/work">Work request <i className="fas fa-chevron-right"></i></NavLink>
                </div>
                {/* {location.pathname !== '/work' ? 
                    <Fragment>
                        <div className='header-left'>
                    <Link to="intro" activeClass="active" smooth={true} spy={true}>Nguyen Hoang Phuc</Link>
                </div>
                <button className='btn-menu' onClick={() => {
                    setHeightList(!heightList)
                }}><AiOutlineMenu/></button>
    
                <div className={`header-list  ${heightList ? "height-true" : "height-false"}`}>
                    <ul>
                        <li>
                            <Link to="services" smooth={true} spy={true}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} spy={true}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} spy={true}>
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} spy={true}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`header-right`} >
                    <NavLink to="/work">Work request <i className="fas fa-chevron-right"></i></NavLink>
                </div>
                    </Fragment> : <Fragment>

                    <div className='header-left'>
                    <a href="/">Nguyen Hoang Phuc</a>
                </div>
                    </Fragment>}  */}
            </div>
        </header>
        </Fragment>
    );
};

export default forwardRef(Header);