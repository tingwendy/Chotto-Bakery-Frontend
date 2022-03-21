import React from "react";
import "./App.css";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import About from "./Components/About"
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import authService from "./Components/Auth";
import CustomOrder from "./Components/CustomOrder";
import MenuDetails from "./Components/MenuDetails";


function App() {
  const logout = () => {
    authService.logout();
  };

  return (
    <div className="App">
   
      <header className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/customorder">Custom Order</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link onClick={logout} to="/">
          Logout
        </Link>
        
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customorder" element={<CustomOrder />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="menu-details" element={<MenuDetails />} />
        <Route path="/login" element={<Login login={true} />} />
        <Route path="/signup" element={<Login login={false} />} />
      </Routes>
    </div>
  );
}

export default App;
