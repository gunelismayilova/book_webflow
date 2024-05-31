import React from 'react'
import styles from "./ProductContent.module.css"
import { Link } from 'react-router-dom'
const ProductContent = () => {
    return (
        <section className={styles.productContent}>
            <div className="container">
                <div className={`row ${styles.topContent}`}>
                    <div className="col-md-4">
                        <div className={styles.productImg}><img src={"/Book1.png"} alt="" className={styles.img} /></div>
                    </div>

                    <div className="col-md-8">
                        <div className={styles.productDesc}>
                            <h5 className={styles.title}>The Atomic One’s</h5>
                            <span className={styles.price}>$30.00 USD</span>
                            <p className={styles.desc}>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.</p>
                            <div className={styles.details}>
                                <p className={styles.detail}>
                                    <span className={styles.detailTitle}>Publisher:</span>
                                    <span className={styles.detailText}>Learning Private Limited (1 January 2021)</span>
                                </p>

                                <p className={styles.detail}>
                                    <span className={styles.detailTitle}>Language:</span>
                                    <span className={styles.detailText}>  English</span>
                                </p>
                            </div>

                            <div className={styles.details}>
                                <p className={styles.detail}>
                                    <span className={styles.detailTitle}>Publisher:</span>
                                    <span className={styles.detailText}>Learning Private Limited (1 January 2021)</span>
                                </p>

                                <p className={styles.detail}>
                                    <span className={styles.detailTitle}>Language:</span>
                                    <span className={styles.detailText}>  English</span>
                                </p>

                                <p className={styles.detail}>
                                    <span className={styles.detailTitle}>Language:</span>
                                    <span className={styles.detailText}>  English</span>
                                </p>
                            </div>

                            <div className={styles.btns}>
                                <span className={styles.number}>1</span>
                                <button className={styles.btn}><Link className={styles.link}><i className="fa-solid fa-cart-shopping"></i>Add to Cart</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`row styles.subContent`}>
                    <div className="col-md-6">
                        <div className={styles.description}>
                            <span className={styles.title1}>Product Description</span>
                            <h6 className={styles.proTitle}>Do you offer discounts for education?</h6>
                            <p className={styles.proText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.description}>
                            <span className={styles.title1}>Additional Info</span>
                            <h6 className={styles.proTitle}>Is this book for me?</h6>
                            <p className={styles.proText}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                        </div>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default ProductContent
