import React from 'react';
import styles from "./Learn.module.css";
const LearnContent = ({num, desc}) => {
    return (
        <div className="col-md-6">
            <div className={styles.learning}>
                <span className={styles.num}>{num}</span>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}

export default LearnContent
