import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Moje knihovnička</h1>
      <div className="icon">
        <img src="/assets/book.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
