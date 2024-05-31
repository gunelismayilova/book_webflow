import React from 'react';
import styles from "./Testimonials.module.css";
// "
const Testimonial = ({name, imgUrl, title, desc}) => {
   
    return (
        <div className={styles.testimonial}>
            <div className={`${styles.person} d-flex`}>
                <div>
                    <img src={imgUrl} alt="" className={styles.personImg} />
                </div>

                <div className={styles.personInfo}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.reviews}>
                        <div className={`${styles.icons} d-flex`}>
                            <div className={styles.icons}><img src={"/Bg1.png"} alt="" /></div>
                            <div className={styles.icons}><img src={"/Bg1.png"} alt="" /></div>
                            <div className={styles.icons}><img src={"/Bg1.png"} alt="" /></div>
                            <div className={styles.icons}><img src={"/Bg1.png"} alt="" /></div>
                            <div className={styles.icons}><img src={"/Bg.png"} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.testimonialContent}>
                <span className={styles.contentTitle}>{title}</span>
                <p className={styles.contentDesc}>{desc}</p>
            </div>
        </div>
    )
}

export default Testimonial
