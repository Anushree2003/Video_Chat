import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/SignupComponent/Signup.jsx';
import Login from './components/LoginComponent/Login.jsx';
import Home from './components/HomeComponent/Home.jsx'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home route */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
