import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <h1 className="text-4xl text-center m-4">
        {" "}
        Welcome in the {props.title}
      </h1>
      <Link to="/">
        <button className="border-2 bg-blue-900 text-gray-200 pl-4  px-4 rounded-xl">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Header;
