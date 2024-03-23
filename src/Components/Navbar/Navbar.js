import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Divide as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  const navigationLinks = [
    { path: "/", text: "Home", color: "#E83E8C" },
    { path: "/About", text: "About", color: "#E83E8C" },
    { path: "/Services", text: "Services", color: "#E83E8C" },
    { path: "/Projects", text: "Projects", color: "#E83E8C" },
    { path: "/Partners", text: "Partners", color: "#E83E8C" },
    { path: "/Contact", text: "Contact", color: "#E83E8C" },
  ];

  const location = useLocation();

  const getActiveLinkStyle = (link) => {
    if (location.pathname === link.path) {
      return { color: link.color };
    }
    return {};
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="Navbar">
      <div className="Nav-imgLink">
        <Link to="/Home" style={{ textDecoration: "none", color: "#E83E8C" }}>
          <h1 className="Nav-imgLink-h1">AKINOLA OSHINUBI</h1>
        </Link>
        <div className="nav-hamburger">
          <Hamburger onClick={toggleMenu} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <div className={`nav-menu ${isOpen ? "is-open " : ""}`}>
        <ul className={"nav-ul "} style={{ listStyle: "none", padding: "0" }}>
          {navigationLinks.map((link) => (
            <li key={link.path} className="nav-li">
              <Link
                to={link.path}
                className="navLink"
                style={getActiveLinkStyle(link)}
                onClick={handleLinkClick} 
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
