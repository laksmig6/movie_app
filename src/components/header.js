import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
  const [showModal, setShowModal] = useState(false);
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
      <div
        onClick={() => {
          setShowModal(true);
        }}
      >
        {isOnline ? "✅ Online" : "❌ Disconnected"}
      </div>

      {showModal &&
        createPortal(
          <div className="popup">
            <p>This child is placed in the document body.</p>
            <span>online status: {isOnline ? "Active" : "Offline"}</span>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;
