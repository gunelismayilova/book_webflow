import React from 'react'
import styles from "./Chapters.module.css";
import Chapter from './Chapter';

const Chapters = () => {

  const chapters = [
    {
      chapterTitle: "01   Get Started Intro",
      desc: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pages: "85pages",
      length: "1 Hour 15 mins"
    },
    {
      chapterTitle: "02   Create a Massive Content",
      desc: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pages: "85pages",
      length: "1 Hour 15 mins"
    },
    {
      chapterTitle: "03   Maintaining the Creative Arcs",
      desc: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pages: "85pages",
      length: "1 Hour 15 mins"
    },
    {
      chapterTitle: "04   The Conclusion",
      desc: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pages: "85pages",
      length: "1 Hour 15 mins"
    },
  ]
  return (
    <section className={styles.chapters}>
      <div className="container">
        <h3 className='title'>The Chapter Includes</h3>
        <div className="row">
          {
            chapters.map(({ chapterTitle, desc, pages, length }, index) => {
              return <Chapter chapterTitle={chapterTitle} desc={desc} pages={pages} length={length} key={index} />
            })
          }

        </div>

        <div className={styles.chapterBottom}>
          <button className={styles.btn}>Start a 15-Days Free Trail</button>
          <div className={styles.shortDesc}>
            <p className={styles.shortInfo}>Short description about each chapter</p>
            <span className={styles.question}>Have any questions?</span>
            <span className={styles.contact}> Contact us</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Chapters
