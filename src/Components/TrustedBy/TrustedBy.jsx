import React from 'react';
import styles from "./TrustedBy.module.css"
import Content from './Content';

const TrustedBy = () => {
  return (
    <section className={styles.trustedBy}>
       <div className="container">
            <h3 className="title">Trusted by the Best</h3>
            <div className="row">
               <Content />
               <Content />
               <Content />
               <Content />
            </div>
       </div>
    </section>
  )
}

export default TrustedBy
