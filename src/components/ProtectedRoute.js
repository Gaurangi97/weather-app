import React from 'react'
import {  Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn=="true") {
      return  <Navigate to="../login" />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;