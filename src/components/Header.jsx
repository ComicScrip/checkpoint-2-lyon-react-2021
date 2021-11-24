import React from "react";

function Header({ name }) {
  return (
    <div className="text-center text-4xl font-bold my">
      <h1> Welcome {name}</h1>
    </div>
  );
}

export default Header;
