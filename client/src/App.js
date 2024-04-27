// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './components/Login';
import Webpage from './components/Webpage';
import Navbar from './components/Navbar';
import Register from './components/Register';
import FormPage from './components/FormPage';
import Logout from './components/Logout';
import './App.css';

// Import your other components here
import Hospitals from './components/Hospitals';
import DoctorConsultation from './components/DoctorConsultation';
import Homecare from './components/Homecare';
import Medicines from './components/Medicines';
import HealthInformation from './components/HealthInformation';
import ContactUs from './components/ContactUs';
import ExercisePage from './components/ExercisePage';
import HealthyRecipies from './components/HealthyRecipies';
import HealthTips from './components/HealthTips';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your authentication logic can be added here
    // For simplicity, let's assume a successful login
    setIsLoggedIn(true);
  };
  
  const handleRegister = (userData) => {
    // Handle registration logic here
    console.log('Registering user:', userData);
    // You can send a request to your backend for user registration

    // For simplicity, let's assume a successful registration
    setIsLoggedIn(true);
  };


  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        {/* Header */}
        <ResponsiveAppBar onLoginClick={() => {}} />
        {/* Main content area */}
        <div className="Content" style={{ marginTop: '70px' }}>
          {/* Route configuration */}
          <Routes>
            {/* Route for the login page */}
            <Route path="/" element={isLoggedIn ? <Navigate to="/webpage" /> : <Login onLogin={handleLogin} />} />
            {/* Route for the registration page */}
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            {/* Route for the home page */}
            <Route path="/webpage" element={<Webpage />} />
            {/* Routes for other components */}
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/doctor-consultation" element={<DoctorConsultation />} />
            <Route path="/homecare" element={<Homecare />} />
            <Route path="/exercise" element={<ExercisePage />} />
            <Route path="/healthyrecipies" element={<HealthyRecipies />} />
            <Route path="/healthtips" element={<HealthTips />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/health-information" element={<HealthInformation />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
