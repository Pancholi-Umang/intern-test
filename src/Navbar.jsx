import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

const Navbar = () => {
  return (
    <div>
      <div className="mainHeader">
        <div className="logo">
          <span className="firstlatter">
            <h1>Umang</h1>
          </span>
          <span className="lastlatter">
            <h2>Pancholi</h2>
          </span>
        </div>
        <div className="mycenterHeading">
          
        </div>
        <div className="listitm">
          <ul className="mylistname">
            <li>
              <Link className="opos" to="/figma">
                Figma
              </Link>
            </li>
            <li>
              <Link className="opos" to="/form">
                Form
              </Link>
            </li>
            <li>
              <Link className="opos" to="/fetchapi">
                Gipgy
              </Link>
            </li>
            <li>
              <Link className="opos" to="/favourite">
                Favourite
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
