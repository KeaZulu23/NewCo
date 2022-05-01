import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactHeroS from '../components/contact/contactHeroSection';

const Contact = () => {
    return(
            <div>
                <Navbar />
                    <ContactHeroS />
                <Footer />
            </div>
    );
}

export default Contact