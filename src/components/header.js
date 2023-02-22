import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    };
  }, []);

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
        </ul>
      </div>
      <div className="pr-3">{isOnline ? "✅ Online" : "❌ Disconnected"}</div>
    </header>
  );
};

export default Header;
