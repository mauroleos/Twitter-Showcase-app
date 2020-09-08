import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
      <h3>Logo</h3>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <Link to="/SearchPage">
            <li className="navbar-item">Search</li>
          </Link>
          <Link to="RandomPage">
            <li className="navbar-item">Random</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
