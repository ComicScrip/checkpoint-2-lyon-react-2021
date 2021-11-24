import React from 'react';

function Header({ name }) {
  return (
    <div id="header" className="p-4 bg-gray-700 text-white font-semibold">
      <h1>{name}</h1>
    </div>
  );
}

export default Header;
