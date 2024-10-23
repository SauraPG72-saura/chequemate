import React from 'react';
import './App.css';
import LoginSignup from './components/login-signup/LoginSignup';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import { useState } from 'react';
import MemberPortal from './components/member-portal/MemberPortal';

const App = () => {

  return (
    <>
      <div className='app'>
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/member' element={<MemberPortal/>}/>
          </Routes>
          
        </Router>
      </div>
    </>
  );
}

export default App;
