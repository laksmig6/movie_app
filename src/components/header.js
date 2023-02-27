import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();

  return (
    <header className="navbar navbar-expand justify-content-between fixed-top navbar-dark bg-dark bd-navbar">
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
          <li className="nav-item">
            <Link className="nav-link text-light" to="/login">
              Form
            </Link>
          </li>
        </ul>
      </div>
      <div>{isOnline ? "✅ Online" : "❌ Disconnected"}</div>
    </header>
  );
};

export default Header;
