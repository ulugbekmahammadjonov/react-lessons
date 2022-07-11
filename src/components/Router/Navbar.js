import React from "react";
import { Link } from "react-router-dom";
import "./MainRouter.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="books">Books</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
