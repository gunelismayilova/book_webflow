import React from 'react'
import styles from "./Books.module.css"
import Book from './Book'
const Books = () => {
  return (
    <section className={styles.authorBooks}>
        <div className="container">
            <div className="row">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </div>
    </section>
  )
}

export default Books

