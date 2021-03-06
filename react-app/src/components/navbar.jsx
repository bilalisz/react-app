import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Vidly
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
        <NavLink className="nav-link" to="/movies">
          Moives <span className="sr-only">(current)</span>
        </NavLink>

        <NavLink className="nav-link" to="/customers">
          Customers
        </NavLink>

        <NavLink className="nav-link" to="/rentals">
          Rentals
        </NavLink>
        <NavLink className="nav-link" to="/login-form">
          Log In
        </NavLink>
        <NavLink className="nav-link" to="/registration-form">
          Registration
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
