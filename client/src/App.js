import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import ContactState from "./context/contact/ContactState";
const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
