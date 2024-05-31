import React from 'react'
import Testimonial from './Testimonial'
import styles from "./Testimonials.module.css";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Martin Philips",
            imgUrl: "/smallimg1.png",
            title: "“ Awesome Impact ”",
            desc: "All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
        },

        {
            name: "James Anderson",
            imgUrl: "/smallimg1.png",
            title: "“ Mind Blowing Words ”",
            desc: "All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
        },

        {
            name: "Christina Louis",
            imgUrl: "/smallimg1.png",
            title: "“ Great Books Collections ”",
            desc: "All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
        },


    ]
    return (
        <section className={`${styles.testimonials} testimonials`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.content}>
                            <h3 className='title'>What Readers Say About the Book</h3>
                            <p className={styles.desc}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</p>
                            <div className={styles.reviews}>
                                <div className={styles.ratings}>
                                    <div className={`${styles.icons} d-flex`}>
                                        <div className={styles.icons}><img src={"/Bg1.png"} alt="" /></div>
                                        <div className={styles.icons}><img src={"/Bg1.png"} alt="" /></div>
                                        <div className={styles.icons}><img src={"/Bg1.png"} alt="" /></div>
                                        <div className={styles.icons}><img src={"/Bg1.png"} alt="" /></div>
                                        <div className={styles.icons}><img src={"/Bg.png"} alt="" /></div>
                                    </div>
                                    <span className={styles.rating}>(4.8/5)</span>
                                </div>
                                <p className={styles.info}>Overall Customer Ratings</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 row">
                        <div className="col">
                            <Testimonial {...testimonials[0]}/>
                            <Testimonial {...testimonials[1]}/>
                        </div>
                        <div className="col d-flex align-items-center">
                            <Testimonial {...testimonials[2]}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
