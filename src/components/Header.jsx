import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <h1><Link to="/">D&D Manager</Link></h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Personnages</Link>
            </li>
            <li>
              <Link to="/groups">Groupes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
