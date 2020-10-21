import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      className="navbar navbar-light bg-light navbar-expand-lg fixed-top"
      expand="lg"
    >
      <Navbar.Brand href="#home">
        <FontAwesomeIcon color="#33ccff" size="2x" icon={faTwitter} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ml-auto">
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <Link to="/SearchPage">
            <li className="navbar-item">Search</li>
          </Link>
          <Link to="RandomPage">
            <li className="navbar-item">Random</li>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
