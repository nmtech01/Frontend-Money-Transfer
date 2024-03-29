import React from 'react';
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login/index'
import Register from '../src/components/Register/index'
import Dashboard from '../src/components/Dashboard/index'
import Requestmoney from '../src/components/RequestMoney/index'
import MyProfile from '../src/components/MyProfile/index'
import ChangePassword from '../src/components/ChangePassword/index'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    
      <div>
          <ToastContainer autoClose={1000} />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/request-money" element={<Requestmoney />} />
          <Route exact path="/my-profile" element={<MyProfile />} />
          <Route exact path="/change-password" element={<ChangePassword />} />



        </Routes>
        
      </div>
    
  )
}

export default App
