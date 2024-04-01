import React, { useEffect, useState } from 'react';
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
import ForgotPassword from '../src/components/ForgotPassword/index'
import ResetPasswrd from '../src/components/ResetPassword/index'
import AppForm from '../src/components/APP/index'
import CollForm from '../src/components/COLL/index'


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking local storage, cookies, etc.)
    // const userIsLoggedIn = checkIfUserIsLoggedIn();
    // setLoggedIn(userIsLoggedIn);

    // // Set up session timeout listener
    // const sessionTimeout = setTimeout(() => {
    //   // Clear session data or perform logout action
    //   setLoggedIn(false);
    // }, SESSION_TIMEOUT_DURATION);

    // return () => {
    //   clearTimeout(sessionTimeout);
    // };
  }, []);

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
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<ResetPasswrd />} />
          <Route exact path="/app-form" element={<AppForm />} />
          <Route exact path="/collect-money" element={<CollForm />} />


        </Routes>
        
      </div>
    
  )
}

export default App
