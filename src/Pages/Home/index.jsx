import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import AuthorBook from '../../Components/AuthorBook/AuthorBook'
import AboutAuthor from '../../Components/AboutAuthor/AboutAuthor'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import Wrapper from '../../Components/Wrapper/Wrapper'
import Learn from '../../Components/Learn/Learn'
import Chapters from '../../Components/Chapters/Chapters'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Articles from '../../Components/Articles/Articles'
import Callout from '../../Components/Callout/Callout'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <>

            
             <Navbar />
            <Header />


            <AuthorBook />
            <AboutAuthor />
            <TrustedBy />
            <Wrapper />
            <Learn />
            <Chapters />
            <Testimonials />
            <Articles />
            <Callout />

            <Footer /> 
        </>
    )
}

export default Home

