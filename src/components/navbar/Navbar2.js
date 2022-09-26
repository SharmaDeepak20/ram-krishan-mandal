import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar2 = () => {

    return (
        <div className="navbar navbar-default navbar-fixed-top">
            <div className="navbar-header"><a className="navbar-brand" href="#">श्री रामकृष्ण मंडल</a>
                <a className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </a>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/mission">Mission</NavLink></li>
                    <li><NavLink exact to="/schedule">Schedule</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar2;