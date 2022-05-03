import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
    <header>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
          <Link to="/" className="nav-link">
              Home
            </Link>
            </li>
            <li>
            <Link to="/forms" className="nav-link">
              Forms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/administerVaccination" className="nav-link">
              Administer Vaccination
            </Link>
          </li>
        </ul>
      </nav>
    </header>
   
    </Fragment>
  );
};

export default Navbar;
