import React from 'react';

export default function Header({ webSiteTitle }) {
  return (
    <div className="header">
      <h1>Welcome to {webSiteTitle}</h1>
    </div>
  );
}