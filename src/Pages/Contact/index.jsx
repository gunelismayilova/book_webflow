import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner';

import Footer from '../../Components/Footer/Footer';
import ContactDetails from '../../Components/ContactDetails/ContactDetails';

const Contact = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="Contact Us"
                desc="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
            />

            <ContactDetails />
            

            <Footer />
        </>
    )
}

export default Contact
