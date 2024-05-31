import React from 'react'
import styles from "./Chapters.module.css";
const Chapter = ({chapterTitle, desc, pages, length}) => {
  return (
    <div className="col-md-6">
        <div className={styles.chapter}>
            <h5 className={styles.chapterTitle}>Chapter- {chapterTitle}</h5>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.details}>
                <div className={styles.detail}>
                    <span className={styles.detailTitle}>Pages :</span>
                    <span className={styles.detailInfo}>{pages}</span>
                </div>

                <div className={styles.detail}>
                    <span className={styles.detailTitle}>Length :</span>
                    <span className={styles.detailInfo}>{length}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chapter
