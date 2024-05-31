import React from 'react';
import styles from  "./Features.module.css";
import Feature from './Feature';


const Features = () => {

    const featureData = [
        {
            title: "Secure Payments",
            imgSrc: "/Icon1.png",
            desc: "There are many variations of passages of alteration in some form."
        },

        {
            title: "Free Shipping",
            imgSrc: "/Icon2.png",
            desc: "There are many variations of passages of alteration in some form."
        },

        {
            title: "100% Satisfactions",
            imgSrc: "/Icon3.png",
            desc: "There are many variations of passages of alteration in some form."
        },
    ]
  return (
    <section className={styles.features}>
        <div className="container">
            <div className="row">
                {
                    featureData.map((data) => {
                        return (
                            <Feature {...data}/>
                        )
                    })
                }
                
            </div>
        </div>
    </section>
  )
}

export default Features
