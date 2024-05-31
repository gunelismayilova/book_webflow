import React from 'react'
import Article from './Article';
import styles from "./Articles.module.css";

const Articles = () => {
    const articles = [
        {
            id: 1,
            img: "/articleImg1.png",
            title: "The energy efficiency offers hydrotherapy or swim",
            desc: "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
        },

        {
            id: 2,
            img: "/articleImg2.png",
            title: "Release of Letraset sheets tools containing  passages",
            desc: "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
        },

        {
            id: 3,
            img: "/articleImg1.png",
            title: "The energy efficiency offers hydrotherapy or swim",
            desc: "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
        },
    ]
    return (
        <section className={styles.articles}>
            <div className="container">
                <h3 className="title">Articles & Resources</h3>
                <div className="row">
                    {
                        articles.map((article, index) => {
                            return (
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                    <Article {...article} key={index}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Articles
