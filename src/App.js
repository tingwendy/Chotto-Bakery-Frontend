import React, { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import About from "./Components/About"
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import authService from "./Components/Auth";
import CustomOrder from "./Components/CustomOrder";
import MenuDetails from "./Components/MenuDetails";
import Profile from "./Components/Profile";
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import { Container, Row, Col, Button, Card, Form, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cakesvg from "./assets/cakesvg.png";

function App() {
  const logout = () => {
    authService.logout();
  };

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === item._id ? {...exist, quantity: exist.quantity + 1} : x
          )
      );
    } else {
        setCartItems([...cartItems, {...item, quantity: 1}]);
    };
  };

    const onRemove = (item) => {
      const exist = cartItems.find((x) => x.id === item._id);
      if(exist.quantity ===1) {
        setCartItems(cartItems.filter((x)=> x.id !== item._id));
      } else {
        setCartItems(
          cartItems.map((x) => 
            x.id === item._id ? {...exist, quantity: exist.quantity - 1} : x
          )
        );
      }
    }
  

  return (
    <div className="App">

    {/* <Basket 
      cartItems={cartItems}
      onAdd={onAdd}
      onRemove={onRemove}
      ></Basket> */}

   
      <Navbar className="navbar" bg="light" variant="dark" sticky="top">
      <Link to= "/" >
        <img className="homelogo" src= {cakesvg} alt="logo" />
        </Link>
        <Container>
        <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
        <Link to="/menu" style={{ textDecoration: 'none', color: 'black' }}>Menu</Link>
        <Link to="/custom/new" style={{ textDecoration: 'none', color: 'black' }}>Custom Order</Link>
        <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Signup</Link>
        <Link onClick={logout} to="/" style={{ textDecoration: 'none', color: 'black' }}>
          Logout 
          </Link>

          {/* <Header countCartItems={cartItems.length} style={{ textDecoration: 'none', color: 'black' }}></Header> */}
        </Container>
      </Navbar>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/custom/new" element={<CustomOrder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/view/:itemId" element={<MenuDetails />} />
        <Route path="/login" element={<Login login={true} />} />
        <Route path="/signup" element={<Login login={false} />} />
      </Routes>
    </div>
  );
}

export default App;
