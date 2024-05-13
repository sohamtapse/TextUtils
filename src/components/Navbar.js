import React from "react";
import PropTypes from "prop-types";
// import { Link} from "react-router-dom";
// import { Router } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        
        <a className="navbar-brand" href="#">
          {props.Title}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 mx-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li> */}
          </ul>
          {/* <form className="d-flex me-auhref" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success mx-1 " type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch me-auto text-${props.mode==='light'?'dark':'light'}`} >
            <input
              className="form-check-input me-auto"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.proptype = {
  Title: PropTypes.string,
};

Navbar.defaultProps = {
  Title: "Title",
};
