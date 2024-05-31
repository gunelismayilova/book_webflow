import React from 'react';
import styles from "./Author.module.css"
import { Link } from 'react-router-dom';

const Author = () => {
  return (
    <div>
        <section className={styles.author}>
            <div className="container">
                <div className="row">
                    <img src={"aboutBanner.png"} alt="" className={styles.authorImg}/>
                </div>

                <div className={`${styles.authorInfo} row justify-content-between`}>
                        <div className="col-md-6 col-lg-4">
                            <div className={styles.details}>
                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Country:</span>
                                    <span className={styles.detailInfo}>United Kingdom</span>
                                </div>

                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Country:</span>
                                    <span className={styles.detailInfo}>United Kingdom</span>
                                </div>

                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Country:</span>
                                    <span className={styles.detailInfo}>United Kingdom</span>
                                </div>

                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Country:</span>
                                    <span className={styles.detailInfo}>United Kingdom</span>
                                </div>

                                <div className={styles.detail}>
                                    <span className={styles.detailTitle}>Country:</span>
                                    <span className={styles.detailInfo}>United Kingdom</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-7 mt-4 mt-md-0">
                            <div className={styles.content}>
                                <h3 className="title left">About Dr. John Abraham </h3>
                                <p className={styles.desc}>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can combined with a handful of model sentence structures.</p>
                                <button className={styles.contactBtn}><Link to={"/contact"} className={styles.link}>Contact now</Link></button>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Author
