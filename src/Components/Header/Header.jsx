import React from 'react';
import styles from "./Header.module.css"

const Banner = () => {
  return (
    <div className={`banner ${styles.banner}`}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="banner-content">
                        <span className={styles.title}>Welcome to Pages</span>
                        <h1 className={styles.basliq}>Books are uniquely portable magic </h1>
                        <p className={styles.desc}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.orderBtn}>Order Today</button>
                            <a href="" className={styles.readDemo}>Read Free Demo</a>
                        </div>

                        <div className="details d-flex justify-content-between">
                            <div className={styles.detail}>
                                <span className={styles.detailsTitle}>Pages:</span>
                                <span className={styles.detailsInfo}>586pages</span>
                            </div>

                            <div className={styles.detail}>
                                <span className={styles.detailsTitle}>Length:</span>
                                <span className={styles.detailsInfo}>10 Hours</span>
                            </div>

                            <div className={styles.detail}>
                                <span className={styles.detailsTitle}>Ratings:</span>
                                <span className={styles.detailsInfo}>4.5/5 (305 ratings)</span>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="banner-img mt-5 mt-lg-0">
                        <img src={"./Book.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
