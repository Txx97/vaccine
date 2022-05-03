import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPatient } from "../../store/actions/Patient";
import {fetchVaccine} from "../../store/actions/Vaccine";

const Navbar = () => {
  const dispatch = useDispatch();
  dispatch(fetchPatient());
  dispatch(fetchVaccine());
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
              Add a Patient
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
