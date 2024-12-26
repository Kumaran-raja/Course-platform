import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Contact from './components/contact.jsx';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Course from './components/course.jsx';
import About from './components/about.jsx';
import Exam from './components/exam.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import CourseDescription from './components/courseDescription.jsx';
const App = () => {
  const location = useLocation();
  
  // Check if the current path is '/login' or '/register'
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coursedescription" element={<CourseDescription/>} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
