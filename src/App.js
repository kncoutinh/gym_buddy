import React from 'react';
import main_img from './components/gym_buddy_main_img.png'; // Import the image
import logo from './components/gym_buddy_logo.png'; // Import the image
import './App.css';
import NavBar from './components/NavBar';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<NavBar />*/}
      </header>
      <body>
        <Testimonials />
        <AboutUs />
      </body>
     </div>
  
  );
}

export default App;
