import React from "react";

const Header = ({ nameTitle }) => {
  return (
    <div>
      <h1 className=" m-15 text-3xl p-10 text-center">
        {" "}
        Welcome in {nameTitle}
      </h1>
    </div>
  );
};

export default Header;
