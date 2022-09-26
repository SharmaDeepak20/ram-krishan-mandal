import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <div className="text-center p-4" style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}>
                © 2022 Copyright:&nbsp;
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Rudra Technosoft Pvt. Ltd.</a>
            </div>

        </footer>

    );
}

export default Footer;