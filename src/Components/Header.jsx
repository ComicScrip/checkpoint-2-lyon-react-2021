import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = ({ name }) => {
  return (
    <div id="header-container">
      <Link to="/">
        <h1 id="header-title">{name}, welcome to this fun site !!!!</h1>
      </Link>
    </div>
  );
};

export default Header;
