import React from 'react'
import styles from "./ContactDetails.module.css";
const ContactContent = () => {
    return (
        <>
            <div className={styles.content}>
                <h3 className={`title left ${styles.title}`}>Keep in Touch</h3>
                <p className={styles.desc}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <div className={styles.info}>
                    <div className={styles.detail}>
                        <div className={styles.detailImg}><i className="fa-solid fa-house"></i></div>
                        <div className={styles.text}>
                            <span className={styles.detailTitle}>Visit Us :</span>
                            <span className={styles.detailInfo}>No: 09a, Downtown, San Dieago, USA.</span>
                        </div>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.detailImg}><i className="fa-solid fa-house"></i></div>
                        <div className={styles.text}>
                            <span className={styles.detailTitle}>Visit Us :</span>
                            <span className={styles.detailInfo}>No: 09a, Downtown, San Dieago, USA.</span>
                        </div>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.detailImg}><i className="fa-solid fa-house"></i></div>
                        <div className={styles.text}>
                            <span className={styles.detailTitle}>Visit Us :</span>
                            <span className={styles.detailInfo}>No: 09a, Downtown, San Dieago, USA.</span>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ContactContent
