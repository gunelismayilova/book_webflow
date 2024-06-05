import React, { useState } from 'react'
import styles from "./Navbar.module.css";
import { Link, NavLink } from 'react-router-dom';
const NavLinks = ({showNav, setShowNav}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    if (show) {
        return (  
            <Cart setShow={setShow}/>
        )
    }
    return (
        <>
            <div className={`collapse navbar-collapse align-items-center" id="navbarSupportedContent ${styles.navbarCollapse} ${showNav ? styles.showNav : ''}`}>
                <ul className={`navbar-nav mr-auto ${styles.navbarNav}`}>
                    <li className="nav-item">
                        <NavLink to={"/"} className={`nav-link ${styles.link}`} href="#">Home </NavLink>
                    </li>


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
                        <a className={`nav-link ${styles.link}`} href="#" onClick={handleShow}><span><i class="fa-solid fa-cart-shopping"></i></span>
                            <span className='num'>01</span></a>
                    </li>
                </ul>

                <Link to={"/store"} className={`${styles.btn} btn order-btn`}>Order Today</Link>

            </div>
        </>
    )
}

export default NavLinks
