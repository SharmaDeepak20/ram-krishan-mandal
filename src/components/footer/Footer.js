import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                <div className="text-center p-4" style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}>
                    © 2022 Copyright:
    <NavLink className="text-reset fw-bold" to="/">Rudra Technosoft Pvt. Ltd.</NavLink>
                </div>
            </footer>
        </div>
    );
}

export default Footer;