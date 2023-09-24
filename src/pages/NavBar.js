import React from 'react'
import {  useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        
        navigate("../login");
      
      };
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand text-info" >Weather App</a> 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <button className="btn btn-info" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  </nav>
  )
}
