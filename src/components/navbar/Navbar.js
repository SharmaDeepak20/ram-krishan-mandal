import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">श्री रामकृष्ण मंडल</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/about">About</NavLink></li>
                        <li><NavLink exact to="/mission">Mission</NavLink></li>
                        <li><NavLink exact to="/schedule">Schedule</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;