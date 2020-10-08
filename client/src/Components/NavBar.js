import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
      <h3>
        <FontAwesomeIcon color="#33ccff" size="2x" mg- icon={faTwitter} />
      </h3>
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
};
export default NavBar;
