import React from 'react'
import styles from "./ContactDetails.module.css";
const ContactForm = () => {
  return (
    <>
        <form action="">
            <div className={styles.contactForm}>
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.formInput}>
                            <i className="fa-solid fa-phone" style={{color: "rgb(255, 202, 66)"}}></i>
                            <input type="text" name="name" id="name" placeholder='Name'className={styles.inputElement}/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={styles.formInput}>
                            <i className="fa-solid fa-phone" style={{color: "rgb(255, 202, 66)"}}></i>
                            <input type="email" name="email" id="email" placeholder='Email' className={styles.inputElement}/>
                        </div>
                    </div>
                </div>
                <div className={styles.formInput}>
                    <i className="fa-solid fa-phone" style={{color: "rgb(255, 202, 66)"}}></i>
                    <input type="tel" name="tel" id="tel" placeholder='Phone' className={styles.inputElement}/>
                </div>

                <div className={styles.formInput}>
                    {/* <i className={` ${styles.textArea} fa-solid fa-phone`} style={{color: "rgb(255, 202, 66)"}}></i> */}
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message' className={styles.inputElement}></textarea>
                </div>

                {/* <div className={styles.formCheck}>
                    <input type="checkbox" name="" id="" />
                </div> */}

                <button className={styles.sendBtn}>Send Message</button>
            </div>

        </form>
    </>
  )
}

export default ContactForm
