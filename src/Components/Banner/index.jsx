import React from 'react';
import styles from "./Banner.module.css"

const Banner = ({ title, desc }) => {
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <h2 className={styles.bannerTitle}>{title}</h2>
                        <p className={styles.desc}>{desc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner

