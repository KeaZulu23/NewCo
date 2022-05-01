import React from 'react';
import About from '../components/About';
import Developers from '../components/Developers';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
// import Subscribe from './components/Subscribe';
import Client from '../components/Client';

const Home = () => {
    return(
            <div>
                <Navbar />
                <Hero />
                <About />
                <Developers />
                <Client />
                <Footer />
            </div>
    );
}

export default Home