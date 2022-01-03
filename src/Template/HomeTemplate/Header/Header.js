import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
    const [heightList, setHeightList] = useState(false)
    return (
        <div className='header'>
            <div className='header-cover'>
            <div className='header-left'>
                <NavLink to="/">Nguyen Hoang Phuc</NavLink>
            </div>
            <button className='btn-menu' onClick={() => {
                setHeightList(!heightList)
            }}><AiOutlineMenu/></button>

            <div className={`header-list  ${heightList ? "height-true" : "height-false"}`}>
                <ul>
                    <li>
                        <NavLink to="#">
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            About me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={`header-right`} >
                <NavLink to="/contact">Work request <i className="fas fa-chevron-right"></i></NavLink>
            </div>
            </div>
        </div>
    );
};

export default Header;