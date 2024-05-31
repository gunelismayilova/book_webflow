import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner';
import ErrorPage from '../../Components/ErrorPage';
import Footer from '../../Components/Footer/Footer';

const NotFound = () => {
  return (
    <>
        <Navbar />
        <Banner
                title="Page Error"
                desc="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        />

        <ErrorPage />

        <Footer />
      
    </>
  )
}

export default NotFound
