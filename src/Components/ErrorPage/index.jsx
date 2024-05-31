import React from 'react';
import styles from  "./ErrorPage.module.css";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className={styles.notFound}>
        <div className={styles.content}>
            <img src={"/notfound.png"} alt="" className={styles.titleImg} />
            <h2 className={styles.title}>Page not Found!!!</h2>
            <p className={styles.desc}>The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</p>
            <Link to={"/"} className={styles.btn}>Back to Home</Link>
        </div>
    </section>
  )
}

export default ErrorPage
