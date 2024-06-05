import React from 'react'
import styles from "./Footer.module.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className={`row ${styles.footerTop}`}>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0">
                        <div className={styles.logo}>
                            <img src={"/logo.png"} alt="" /><span className={styles.logoInfo}>Pages</span>
                        </div>
                        <div className={`${styles.socialIcons} d-flex gap-3 justify-content-center justify-content-sm-start`}>
                            <span className={styles.icon}><i className="fa-brands fa-facebook-f"></i></span>
                            <span className={styles.icon}><i className="fa-brands fa-twitter"></i></span>
                            <span className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></span>
                            <span className={styles.icon}><i className="fa-brands fa-instagram"></i></span>
                        </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-sm-0">
                    <h5 className={styles.title}>Explore</h5>
                    <div className={styles.links}>
                        <Link to={"/"} className={styles.link}><img src={"/footerIcon.png"} alt="" />Home</Link>
                        <Link to={"/about"} className={styles.link}><img src={"/footerIcon.png"} alt="" />About Us</Link>
                        <Link to={"/store"} className={styles.link}><img src={"/footerIcon.png"} alt="" />Store</Link>
                        <Link className={styles.link}><img src={"/footerIcon.png"} alt="" />Appointments</Link>
                        <Link to={"/blog"} className={styles.link}><img src={"/footerIcon.png"} alt="" />Blog</Link>
                        <Link to={"/contact"} className={styles.link}><img src={"/footerIcon.png"} alt="" />Contact Us</Link>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                <h5 className={styles.title}>Utility Pages</h5>
                    <div className={styles.links}>
                        <Link to={"/"} className={styles.link}><img src={"/footerIcon.png"} alt="" />Home</Link>
                        <Link to={"/about"} className={styles.link}><img src={"/footerIcon.png"} alt="" />About Us</Link>
                        <Link to={"/store"} className={styles.link}><img src={"/footerIcon.png"} alt="" />Store</Link>
                        <Link className={styles.link}><img src={"/footerIcon.png"} alt="" />Appointments</Link>
                        <Link to={"/blog"} className={styles.link}><img src={"/footerIcon.png"} alt="" />Blog</Link>
                        <Link to={"/contact"} className={styles.link}><img src={"/footerIcon.png"} alt="" />Contact Us</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-5 mt-lg-0 col-sm-12">
                    <h5 className={styles.title}>Keep in Touch</h5>
                    <div className={styles.contact}>
                        <p className={styles.contactInfo}>
                            <span className={styles.contactTitle}>Address :</span>
                            <span className={styles.contactText}>24A Kingston St, Los Vegas NC 28202, USA.</span>
                        </p>

                        <p className={styles.contactInfo}>
                            <span className={styles.contactTitle}>Mail :</span>
                            <span className={styles.contactText}>support@doctors.com</span>
                        </p>

                        <p className={styles.contactInfo}>
                            <span className={styles.contactTitle}>Phone :</span>
                            <span className={styles.contactText}>(+22) 123 - 4567 - 900</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>Drafted by Victorflow - Powered by Webflow</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
