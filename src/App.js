import React, { Component } from 'react'
import './App.css';
import LoginPage from './pages/LoginPage.js'
import HomePage from './pages/HomePage.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

export default class App extends Component {
 
  render() {
    return (
      <Routes>
             <Route path="/login" element={<LoginPage/>} />
             <Route path="/home" element={<HomePage/>} />
             <Route path="*" element={<LoginPage />} />
  
         </Routes>
    )
  }
}




