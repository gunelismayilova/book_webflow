import React from 'react';
import styles from "./Navbar.module.css"
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    
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
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    

                    <div className={`collapse navbar-collapse align-items-center" id="navbarSupportedContent ${styles.navbarCollapse}`}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to={"/"} className={`nav-link ${styles.link}`} href="#">Home </NavLink>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <NavLink  className={`nav-link dropdown-toggle ${styles.link}`}  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages
                                </NavLink >
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}

                            <li className="nav-item">
                                <NavLink to={"/blog"} className={`nav-link ${styles.link}`} href="#">Pages </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/about"} className={`nav-link ${styles.link}`} href="#">About </NavLink>
                            </li>
                           

                            <li className="nav-item">
                                <NavLink to={"/store"} className={`nav-link ${styles.link}`} href="#">Store </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={"/contact"} className={`nav-link ${styles.link}`} href="#">Contact </NavLink>
                            </li>

                            <li className="nav-item cart">
                                <a className={`nav-link ${styles.link}`} href="#"><span><i class="fa-solid fa-cart-shopping"></i></span>
                                    <span className='num'>01</span></a>
                            </li>
                        </ul>

                        <Link to={"/store"} className={`${styles.btn} btn order-btn`}>Order Today</Link>

                    </div>
                </div>
            </nav>
    

    )
}

export default Navbar
