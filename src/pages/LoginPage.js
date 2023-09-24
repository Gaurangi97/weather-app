import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function LoginPage () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => {
      if (username =="admin" && password== "password"){
        localStorage.setItem('loggedIn', 'true');
        navigate("../home");


      }
      else{
        alert("Try Again")
      }

    };
  
  
    return ( 
      <div className="container mt-4">
  <div className="row">
    <div className="col-md-4 mx-auto"> 
      <div className="mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-info">Login For Weather App</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button type="button" className="btn btn-info" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   )

}
