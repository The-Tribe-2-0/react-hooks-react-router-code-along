import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./Navbar";
import Signup from "./signup";
import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
    return (
      <div>
        <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
      </div>
    );
  }
  
  export default App;