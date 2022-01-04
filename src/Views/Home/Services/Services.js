import React from 'react'
import avt from '../../../images/IMG_3450.PNG'
const Services = () => {
    return (
        <div className='services cover' id="services">
            <div className='services-title'>
                <div className='services-title-top'>
                <h3>Is not just what it looks like and feels like.</h3>
                </div>
                <div className='services-title-bottom'>
                <h3>Is how it works.</h3>
                <p>- Steve Jobs -</p>
                </div>
           </div>
            <div className='draw'>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div className='services-content'>
                <div className='services-content-cover'>
                <div className='services-content-left'>
                    <div className='title'>
                        <h2>My services</h2>
                        <p>The most creative intuitive workmate.</p>
                    </div>
                    <div className='services-left-avt'>
                 
                       <div className='services-avt-img'>
                       <i class="fas fa-code"></i>
                    <i class="fab fa-github"></i>
                    <i class="fab fa-js-square"></i>
                    <i class="fab fa-bootstrap"></i>
                    </div>
                    </div>
                </div>
                <div className='services-content-right'>
                    <div className='services-right-card'>
                        <span><i class="fas fa-mouse-pointer"></i> Developer Skills</span>
                        <p>A full knowledge of HTML / CSS and Javascript. I make responsive applications with Bootstrap and interactive UI's with React.</p>
                    </div>
                    <div className='services-right-card'>
                        <span><i class="fas fa-object-ungroup"></i> UI Design</span>
                        <p>A love for design and a good eye for creativity. I have proficiency in wireframing, color theory and visual communication.</p>
                    </div>
                    <div className='services-right-card'>
                        <span><i class="fas fa-paint-brush"></i> 2D Artist</span>
                        <p>2+ years of digital illustration experience, mastering techniques in Photoshop and Procreate.</p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}
export default Services