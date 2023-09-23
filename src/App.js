import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage.js'
import HomePage from './pages/HomePage.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
function App() {
  return (

    <Router>
    <Routes>
           <Route path="/login" element={<LoginPage/>} />
           <Route path="/home" element={<HomePage/>} />


       </Routes>
      </Router>

  );
}

export default App;
