import React from 'react';
import './Header.css';

export default function Header(){
    return(
        <section id="Home" className="headers">
            {/* <span className="title">🥶</span>                 */}
            <div className="items">
                <a href="#AboutMe" className="header">About Me</a>
                <a href="#Resume" className="header">Resume</a>
                <a href="#Home" className="header home-btn">Home</a>
                <a href="#testimonial" className="header">Testimonial</a>
                <a href="#ContactMe" className="header">Contact Me</a>
            </div>
        </section>
    );
}