import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Footer } from "react-bootstrap";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <ul className="nav-icon-set">
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="nav-icon-label">Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/list" style={{ textDecoration: "none" }}>
              <span className="nav-icon-label">List</span>
            </Link>
          </li>
          <li>
            <span className="nav-icon-label">Profile</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const AddButton = (props) => {
  return (
    <Link to="/addAnimal" style={{ textDecoration: "none" }}>
      <button className="addButton mr-auto">
        <span>add</span>
      </button>
    </Link>
  );
};

export { Footer, AddButton };
