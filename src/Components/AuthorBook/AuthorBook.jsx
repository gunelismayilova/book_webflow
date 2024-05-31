import React from 'react';
import Book from './Book';
import styles from "./AuthorBook.module.css"


const AuthorBook = () => {
    return (
        <section className={styles.authorBooks}>
            <div className="container">
                <h3 className='title'>Author’s Book Includes</h3>
                <div className="books row">
                    
                    <Book />
                    <Book />

                </div>
            </div>
        </section>
    )
}

export default AuthorBook
