import React from "react";
import {Link} from "react-router-dom";

function HomeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link style={{fontWeight:"bold"}} className="navbar-brand" to="/">
          Blog Site
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
