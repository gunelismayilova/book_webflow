import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner';
import BlogArticles from '../../Components/BlogArticles';
import Footer from '../../Components/Footer/Footer';

const Blog = () => {
  return (
    <>
        <Navbar />
        <Banner
                title="Articles"
                desc="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        />

        <BlogArticles />

        <Footer />
    </>
  )
}

export default Blog
