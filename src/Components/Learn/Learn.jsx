import React from 'react';
import styles from "./Learn.module.css"
import LearnContent from './LearnContent';

const Learn = () => {
 const learnDetails = [
    {num: '01', desc: "Use HDFS & Map Reduce for storing & analyzing data at scale."},
    {num: '02', desc: "Consume streaming data using Spark Streaming, Flink, and Storm."},
    {num: '03', desc: "Choose an appropriate data storage technology for your application"},
    {num: '04', desc: "Analyze non-relational data using HBase, Cassandra, and MongoDB."},
 ]

  return (
    <section className={styles.learn}>
        <div className="container">
            <h3 className="title">What will you learn?</h3>
            <div className={`row ${styles.content} align-items-center flex-column-reverse flex-lg-row`}>
                <div className="col-lg-8 col-md-12 row">
                    {
                        learnDetails.map(function ({num, desc}, index) {
                           return <LearnContent key= {index} num = {num} desc = {desc}/>
                       })
                    }
                </div>

                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div>
                        <img src={"/Image2.png"} alt="" className={styles.contentImg}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Learn
