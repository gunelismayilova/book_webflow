import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner'
import Author from '../../Components/Author/Author'
import History from '../../Components/Story/History'
import AuthorBook from '../../Components/AuthorBook/AuthorBook'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import Callout from '../../Components/Callout/Callout'
import Footer from '../../Components/Footer/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="About the Author"
                desc="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
            />

            <Author />
            <History />
            <AuthorBook />
            <TrustedBy />

            <Callout />
            <Footer />
            

        </>
    )
}

export default About
