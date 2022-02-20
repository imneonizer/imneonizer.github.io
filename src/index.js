import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import Certificates from './components/certificates/certificates';
import './index.css';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/certificates" element={<Certificates />} />
          <Route exact path="/education" element={<Education />} />
        </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));