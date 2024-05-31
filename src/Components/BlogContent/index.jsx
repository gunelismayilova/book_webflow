import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner';
import styles from "./BlogContent.module.css";
import { useParams } from 'react-router';

const articles = [
    {
        id: 0,
        img: "/articleImg1.png",
        title: "The energy efficiency offers hydrotherapy or swim",
        desc: "1The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },

    {
        id: 1,
        img: "/articleImg2.png",
        title: "Release of Letraset sheets tools containing  passages",
        desc: "2The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },

    {
        id: 2,
        img: "/articleImg3.png",
        title: "The energy efficiency offers hydrotherapy or swim",
        desc: "3The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },

    {
        id: 3,
        img: "/articleImg4.png",
        title: "The energy efficiency offers hydrotherapy or swim",
        desc: "4The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },

    {
        id: 4,
        img: "/articleImg5.png",
        title: "Release of Letraset sheets tools containing  passages",
        desc: "5The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },

    {
        id: 5,
        img: "/articleImg6.png",
        title: "The energy efficiency offers hydrotherapy or swim",
        desc: "6The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },

    {
        id: 6,
        img: "/articleImg2.png",
        title: "The energy efficiency offers hydrotherapy or swim",
        desc: "7The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },

    {
        id: 7,
        img: "/articleImg4.png",
        title: "Release of Letraset sheets tools containing  passages",
        desc: "8The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },

    {
        id: 8,
        img: "/articleImg8.png",
        title: "The energy efficiency offers hydrotherapy or swim",
        desc: "9The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
    },


]
const BlogContent = () => {
    const [article, setArticle] = useState({});
    
    const {id} = useParams();
    useEffect(() => {
        setArticle(articles[id])
    })

  return (
    <>
    <Banner
                title={article.title}
                desc=""
    />
    <section className={styles.blogContent}>
        <div className="container">
            <div className={styles.imgBox}>
                <img src={article.img} className={styles.blogImg} />
            </div>

            <div className={styles.blogInfo}>
                <div className={styles.blogDetails}>
                    <span className={styles.date}>October 6, 2021</span>/
                    <span className={styles.type}>Classics</span>

                </div>

                <p className={styles.blogDesc}>{article.desc}</p>
            </div>
        </div>
    </section >
    </>
  )
}

export default BlogContent
