import React from 'react'
import styles from "./Books.module.css";
import { Link } from 'react-router-dom'

const Book = () => {
    return (
        <>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className={styles.book}>
                    <div className={styles.bookImg}>
                        <img src="/Book1.png" alt="" className={styles.img} />
                    </div>

                    <div className={styles.bookContent}>
                        <div className={styles.bookTop}>
                            <h4 className={styles.title}>Atomic One’s</h4>
                            <span className={styles.price}>$23.89</span>
                        </div>

                        <p className={styles.desc}>Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</p>
                        <p className={styles.type}>Printed Books</p>
                        <button className={styles.orderBtn}><Link className={styles.link}>Order Today</Link></button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Book
