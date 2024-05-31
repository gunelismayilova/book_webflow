import React from 'react';
import styles from "./Wrapper.module.css";
const Wrapper = () => {
  return (
    <section className={`${styles.wrapper} wrapper`}> 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className={styles.content}>
                        <h3 className="title">Get Book Copy Today!</h3>
                        <p className={styles.desc}>This the first true value generator on the Internet. It uses alphas dictionary of over 200 Latin words.</p>
                        <button className={styles.orderBtn}>Order Today</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Wrapper
