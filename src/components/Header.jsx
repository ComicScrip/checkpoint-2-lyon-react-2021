import React from "react";

export default function Header({ headerTitle }) {
  return (
    <div id="header">
      <h1>Welcome to {headerTitle}</h1>
    </div>
  );
}
