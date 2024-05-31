import React from 'react';
import styles from  "./Features.module.css";

const Feature = ({imgSrc, title, desc}) => {
    return (
        <>
            <div className="col-md-4">
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                        <img src={imgSrc} alt="" className={styles.icon} />
                    </div>
                    <h5 className={styles.title}>{title}</h5>
                    <p className={styles.featureDesc}>{desc}</p>
                </div>

            </div>
        </>
    )
}

export default Feature

