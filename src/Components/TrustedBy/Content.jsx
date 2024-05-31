import React from 'react'
import styles from "./TrustedBy.module.css"

const Content = () => {
    return (
        <div className="col-lg-3 col-sm-6 mb-5 mb-sm-4 mb-lg-0">
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <img src={"/Logo2.png"} alt="" className={styles.img}/>
                </div>

                <div className="info">
                    <h5 className={styles.title}>Amazen Corp</h5>
                    <p className={styles.text}>A long established fact that a who looking at its layout.</p>
                </div>
            </div>
        </div>
    )
}

export default Content
