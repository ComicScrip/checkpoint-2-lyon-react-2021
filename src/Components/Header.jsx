import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="text-4xl text-center m-4">
        {" "}
        Welcome in the {props.title}
      </h1>
    </div>
  );
};

export default Header;
