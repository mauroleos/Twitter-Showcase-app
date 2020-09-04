import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
      <a href="/#" className="navbar-brand">
        Twitter Showcase App
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <a href="/#" className="nav-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/#" className="nav-link">
              Search
            </a>
          </li>
          <li className="navbar-item">
            <a href="/#" className="nav-link">
              Random
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
