import React from 'react';
import styles from "./Articles.module.css";
import { Link } from 'react-router-dom';
const Article = ({id, img, title, desc}) => {
   
    return (
        <div className={`${styles.article} mb-4`}>
            <div>
                <img src={img} alt="" className={styles.articleImg} />
            </div>

            <div className={styles.articleContent}>
                <h5 className={styles.articleTitle}>{title}</h5>
                <p className={styles.articleDesc}>{desc}</p>
                <div className={`${styles.articleDetails} d-flex align-items-center`}>
                    <Link to={`/blog/${id}`} className={styles.readMore}>Read more</Link>
                    <p className={styles.detailInfo}>Author - 23.05.2022</p>
                </div>
            </div>
        </div>
    )
}

export default Article
