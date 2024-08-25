import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Services from './components/Services';
import Reservations from './components/Reservations';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="reservations">
        <Reservations />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
