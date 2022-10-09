import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar navbar-expand fixed-top navbar-dark bg-dark bd-navbar">
      <div className="navbar-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/favourites">
              Favourites List
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
