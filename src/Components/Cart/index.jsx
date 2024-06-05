import React, { useState } from 'react';
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom';

const Cart = ({setShow}) => {
    const handleClose = () => setShow(false);
  return (
    <section className={styles.yourCart}>
        <div className={styles.cartContent}>
            <div className="container">
                <div className={styles.title}>
                    <h2 className={styles.cartTitle}>Your Cart</h2>
                    <button onClick={handleClose} className={styles.closeBtn}><i className="fa-solid fa-xmark"></i></button>
                </div>

                <div className={styles.cartInfo}>
                    <div className={styles.content}>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookImg}>
                                <img src={"/Book1.png"} alt="" className={styles.img} />
                            </div>

                            <div className={styles.bookContent}>
                                <div className={styles.top}>
                                    <h2 className={styles.bookTitle}>Atomic One’s</h2>
                                    <span className={styles.price}>$30.00 USD</span>
                                </div>

                                <button className={styles.removeBtn}>Remove</button>
                            </div>
                        </div>

                        <div className={styles.productNum}>
                            <span className={styles.num}>1</span>
                        </div>
                    </div>

                    <div className={styles.subContent}>
                        <span className={styles.subTitle}>Sub-Total</span>
                        <span className={styles.totalPrice}>$ 60.00 USD</span>
                    </div>

                    <Link className={styles.checkoutBtn}>Continue to Checkout</Link>
                </div>
            </div>
        </div>
    </section >
  )
}

export default Cart
