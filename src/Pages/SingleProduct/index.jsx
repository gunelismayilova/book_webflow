import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner';
import ProductContent from '../../Components/ProductContent/ProductContent';
import Features from '../../Components/Features';
import Footer from '../../Components/Footer/Footer';
const SingleProduct = () => {
  return (
    <>
        <Navbar />

        <Banner
                title="My Store"
                desc="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        />

        <ProductContent />

        <Features />

        <Footer />
    </>
  )
}


export default SingleProduct
