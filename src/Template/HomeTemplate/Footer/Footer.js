import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='footer-cover'>
                <div className='footer-left'>
                    <h4>©2022 Nguyen Hoang Phuc</h4>
                </div>
                <div className='footer-middle'>
                    <ul>
                        <li>Front-End Developer</li>
                        <li>UI Designer</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <ul>
                        <li><a>Github</a></li>
                        <li><a>Gmail</a></li>
                        <li><a>Email</a></li>
                        <li><a>Instagram</a></li>
                        <li><a>LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;