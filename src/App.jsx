import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import Tech from './components/Tech';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

//import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About/>} />
        <Route path="/tech" element={<Tech/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
