import React from 'react';
import styles from "./ContactDetails.module.css"
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';

const ContactDetails = () => {
  return (
    <section className={styles.contact}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5">
                    <ContactContent />
                </div>

                <div className="col-md-6 col-lg-7">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactDetails
