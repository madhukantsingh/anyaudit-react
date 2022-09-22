import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="sidenavbar navbar-expand navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
         <h2 style={{color: "success "}}> AnyAudit</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
               <h6  > Company </h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/sister">
              <h6> Sister</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/business">
              <h6 > Business</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/heads">
              <h6> Heads</h6> 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/types">
              <h6> Types </h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/productname">
              <h6> Products Names</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/uom">
              <h6> UOM Master </h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/family">
              <h6> Family Name</h6>
              </NavLink>
            </li>

           
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/assets">
              <h6> Assets</h6>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/assetstype">
              <h6> Assetstype</h6>
              </NavLink>
            </li>
           
           

           
          </ul>
        </div>

       
    
      </div>
    </nav>
  );
};

export default Navbar;
