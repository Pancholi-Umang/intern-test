import React from "react";
import { Link } from "react-router-dom";
import './figma.css'

function Figma() {
  return (
    <div className="comoomn">
      <li className="threeli">
        <Link className="opos" to="/first">
          First
        </Link>
      </li>
      <li className="threeli">
        <Link className="opos" to="/second">
          Second
        </Link>
      </li>
      <li className="threeli">
        <Link className="opos" to="/third">
          Third
        </Link>
      </li>
    </div>
  );
}

export default Figma;
