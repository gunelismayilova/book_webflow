import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner';
import Callout from '../../Components/Callout/Callout';
import Footer from '../../Components/Footer/Footer';
import Books from '../../Components/Books/Books';

const Store = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="My Store"
                desc="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
            />

            <Books />

            <Callout />
            <Footer />
        </>
    )
}

export default Store
