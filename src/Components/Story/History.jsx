import React from 'react'
import styles from  "./History.module.css"

const History = () => {
  return (
    <div>
      <section className={styles.history}>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-7 mt-5 mt-md-0">
                        <div className={styles.storyContent}>
                            <h3 className='title left'>My Story</h3>
                            <p className={styles.desc}>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
                            <div className={styles.details}>
                                <div className={styles.detail}>
                                    <span className={styles.num}>01</span>
                                    <div className={styles.detailContent}>
                                        <h5 className={styles.detailTitle}>Great Author Awards - 1996 & 2000</h5>
                                        <p className={styles.detailText}>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                                    </div>
                                </div>

                                <div className={styles.detail}>
                                    <span className={styles.num}>02</span>
                                    <div className={styles.detailContent}>
                                        <h5 className={styles.detailTitle}>Great Author Awards - 1996 & 2000</h5>
                                        <p className={styles.detailText}>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                                    </div>
                                </div>

                                <div className={styles.detail}>
                                    <span className={styles.num}>03</span>
                                    <div className={styles.detailContent}>
                                        <h5 className={styles.detailTitle}>Great Author Awards - 1996 & 2000</h5>
                                        <p className={styles.detailText}>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                    </div>

                    <div className="col-md-5">
                            <img src={"/about.png"} className={styles.storyImg}></img>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default History
