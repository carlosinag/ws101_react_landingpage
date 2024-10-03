import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
