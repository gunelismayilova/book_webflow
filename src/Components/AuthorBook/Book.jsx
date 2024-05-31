import React from 'react';
import styles from "./AuthorBook.module.css"

const Book = () => {
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="book row align-items-center mb-5 mb-lg-0">
                <div className="col-12 col-sm-5">
                    <div>
                        <img src={"/Book1.png"} alt="" className={styles.bookImg}/>
                    </div>
                </div>
                <div className="col-12 col-sm-7">
                    <div className="bookInfo">
                        <h4 className={styles.bookTitle}>Atomic One’s</h4>
                        <p className={styles.bookDesc}>Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</p>
                        <div className={`${styles.bookDetails} d-flex`}>
                            <div className={styles.detail}>
                                <span className={styles.detailTitle}>Pages:</span>
                                <span className={styles.detailInfo}>586pages</span>
                            </div>

                            <div className={styles.detail}>
                                <span className={styles.detailTitle}>Length:</span>
                                <span className={styles.detailInfo}>10 Hours</span>
                            </div>
                        </div>

                        <button className={styles.orderBtn}>Order Today</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Book
