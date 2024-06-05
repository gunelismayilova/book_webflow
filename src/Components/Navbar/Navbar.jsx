import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart';
import NavLinks from './NavLinks';


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNavbar = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className={`navbar navbar-expand-lg align-items-center ${styles.nav}`}>
            <div className="nav-container container">
                <div className="nav-left d-flex align-items-center">
                    <a className="navbar-brand d-flex align-items-center" href="#"><img src={"/logo.png"} alt="" /><span>Pages</span></a>
                    <div className="social-icons d-flex">
                        <span><i class="fa-brands fa-facebook-f"></i></span>
                        <span><i class="fa-brands fa-twitter"></i></span>
                        <span><i class="fa-brands fa-linkedin-in"></i></span>
                    </div>
                </div>
                <button className="navbar-toggler" onClick={toggleNavbar} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <NavLinks setShowNav={setShowNav} showNav = {showNav}/>
            </div>
        </nav>


    )
}

export default Navbar
