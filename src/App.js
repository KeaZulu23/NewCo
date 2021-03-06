import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home';
import About from './routes/About';
import SummaryProfile from './routes/Summary & Profile';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/summaryprofile' element={<SummaryProfile />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
