import React from "react";
import { Link } from "react-router-dom";

const Header = ({ name }) => {
  return (
    <>
      <Link to="/">
        <h1>{name}, welcome to this fun site !!!!</h1>
      </Link>
    </>
  );
};

export default Header;
