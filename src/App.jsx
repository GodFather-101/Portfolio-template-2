import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar_Setup/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PortFolio from './Components/PortFolio/PortFolio';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<PortFolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>

    </React.Fragment>


  )
}

export default App