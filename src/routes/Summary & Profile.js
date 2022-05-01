import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import SumProf from '../components/Summary/summaryHeroSection';
import DownloadSection from '../components/Summary/summaryClientDownload'
// import Subscribe from './components/Subscribe';

const SummaryProfile = () => {
    return(
            <div>
                <Navbar />
                <SumProf />
                <DownloadSection />
                <Footer />
            </div>
    );
}

export default SummaryProfile