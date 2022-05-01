import React from 'react'

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutPageSection1 from '../components/about/aboutPageSection';

const About = () => {
    return(
            <div>
                <Navbar />
                    <AboutPageSection1 />
                <Footer />
            </div>
    )
}

export default About;