import React from 'react'
import styles from "./Callout.module.css";
const Callout = () => {
  return (
    <section className={styles.callout}>
        <div className={`container ${styles.content} calloutContent container-fluid`}>
            <h3 className='title'>Read a free chapter</h3>
            <p className={styles.desc}>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
            <form action="">
                <div className={styles.formContainer}>
                    <input type="email" name="" id="" placeholder='Your Email id...' className={styles.email}/>
                    <button type="submit" className={styles.submitBtn}>Subscribe</button>

                </div>
            </form>
        </div>
    </section>
  )
}

export default Callout
