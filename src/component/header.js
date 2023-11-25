import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';

function Header() {
  return (
      <nav className="navbar">
        <ol>
          <li className="navbar"><Link to="/">Home</Link></li>
          <li className="navbar"><Link to="/projects">[Project]</Link></li>
          <li className="navbar"><Link to="/visual-experimentation">Visual experimentation</Link></li>
          <li className="navbar"><a href="https://www.are.na/johndoe" target="_blank" rel="noopener noreferrer">Are.na</a></li>
        </ol>
      </nav>
  );
}

export default Header;
