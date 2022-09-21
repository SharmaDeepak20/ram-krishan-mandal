import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/navbar/Home';
import Mission from './components/navbar/Mission';
import Schedule from './components/navbar/Schedule';
import About from './components/navbar/About';
import Footer from './components/footer/Footer.js';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>



        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mission" element={<Mission />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <br />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
