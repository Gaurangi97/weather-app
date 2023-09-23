import React, { Component, useState } from 'react';


export default function LoginPage () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      // Implement your authentication logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
  
    return ( <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>    )

}
