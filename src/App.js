import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import LandingPage from "./Components/Pages/LandingPage";
import Projects from "./Components/Pages/Projects";
import Partners from "./Components/Pages/Partners";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Pages/Services";
import "./index.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/Home" Component={LandingPage} />
          <Route path="/About" Component={About} />
          <Route path="/Services" Component={Services} />
          <Route path="/Projects" Component={Projects} />
          <Route path="/Partners" Component={Partners} />
          <Route path="/Contact" Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
