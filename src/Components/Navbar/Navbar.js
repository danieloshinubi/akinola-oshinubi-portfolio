import React, { useState } from "react";
import me_in_trad from "../../Assets/Images/final year photoshoot.jpg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Turn as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  const navigationLinks = [
    { path: "/", text: "Home", color: "#7D11F9" },
    { path: "/About", text: "About", color: "#7D11F9" },
    { path: "/Projects", text: "Projects", color: "#7D11F9" },
    { path: "/Partners", text: "Partners", color: "#7D11F9" },
    { path: "/Contact", text: "Contact", color: "#7D11F9" },
  ];

  const location = useLocation();

  const getActiveLinkStyle = (link) => {
    if (location.pathname === link.path) {
      return { color: link.color };
    }
    return {};
  };

  return (
    <nav className="Navbar">
      <div className="Nav-imgLink">
        {" "}
        <Link to="/Home" style={{ textDecoration: "none", color: "#E83E8C" }}>
          <h1 className="Nav-imgLink-h1">AKINOLA OSHINUBI</h1>
          {/* <img src={me_in_trad} alt="dev-icon" className="nav-image" /> */}
        </Link>
        <div className="nav-hamburger">
          <Hamburger onClick={toggleMenu} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <div className={`nav-menu ${isOpen ? "is-open" : ""}`}>
        <ul className={"nav-ul"} style={{ listStyle: "none", padding: "0" }}>
          {navigationLinks.map((link) => (
            <li key={link.path} className="nav-li">
              <Link
                to={link.path}
                className="navLink"
                style={(getActiveLinkStyle(link), { textDecoration: "none" })}
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
