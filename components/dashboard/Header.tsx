// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl">Dashboard</h1>
      <div>Profile</div>
    </header>
  );
}

export default Header;
