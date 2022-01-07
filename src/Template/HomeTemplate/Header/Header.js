import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

const Header = () => {
    const location = useLocation()
    const [heightList, setHeightList] = useState(false)
    return (
        <header className='header'>
            <div className='header-cover'>
                {location.pathname !== '/work' ? 
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
                    <Link2 to="/">Nguyen Hoang Phuc</Link2>
                </div>
                    </Fragment>} 
            </div>
        </header>
    );
};

export default Header;