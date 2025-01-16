import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Creation from './Pages/Creation/Creation';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import logo from '../src/Images/unnamed.png'
function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Creation />} />
        </Routes>
        <Footer />
        <div className='w-full flex justify-center m-8'>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
