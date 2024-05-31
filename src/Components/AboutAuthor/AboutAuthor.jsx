import React from 'react';
import styles from "./AboutAuthor.module.css"

const AboutAuthor = () => {
  return (
    <section className={styles.aboutAuthor}>
        <div className={`container ${styles.about}`}>
            <div className="row">
                <div className="col-md-5">
                    <div>
                        <img src={"/Photo1.png"} alt="" className={styles.authorImg}/>
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="authorInfo">
                        <h3 className={`title ${styles.title}`}>About Author</h3>
                        <p className={styles.desc}>All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as necessary, making this the first true value generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</p>
                        <div className="counter row">
                            <div className={`col ${styles.counterCol}`}>
                                <span className={styles.count}>02</span>
                                <span className={styles.text}>Books Published</span>
                            </div>
                            <div className={`col ${styles.counterCol}`}>
                                <span className={styles.count}>02</span>
                                <span className={styles.text}>Books Published</span>
                            </div>
                            <div className={`col ${styles.counterCol}`}>
                                <span className={styles.count}>02</span>
                                <span className={styles.text}>Books Published</span>
                            </div>
                        </div>

                        <div className={`${styles.details} row`}>
                            <div className="col-3">
                                <img src={"/Image1.png"} alt="" className={styles.detailImg}/>
                            </div>
                            <div className="col-9">
                                <div className="detailInfo">
                                    <span className={styles.detailTitle}>John Abraham , Ph.d</span>
                                    <p className={styles.detailText}>
                                        <span className="text">Mail : johnabraham@gmail.com</span>
                                        <span className="text">Phone : (+2) 123 545 9000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutAuthor
