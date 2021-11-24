import React from "react";

function Header({ name }) {
  return (
    <div className="text-center text-4xl font-bold my pb-20">
      <h1> Welcome {name}</h1>
      <h1> Welcom in my Game Wilder !</h1>
    </div>
  );
}

export default Header;
