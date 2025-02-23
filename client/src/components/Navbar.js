import React from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active link styling
import '../styles/Navbar.css'; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 16 16" >
        <path fill="currentColor" d="M14.534 4.283a5.502 5.502 0 0 0-.808-1.303l-1.743 1.743a1.996 1.996 0 0 0 2.55-.44Zm-3.258-.267l1.743-1.743a5.5 5.5 0 0 0-1.302-.808a1.996 1.996 0 0 0-.44 2.551ZM10 3c0 .648.206 1.248.555 1.738l-.805.805l-3.488-3.489a5.522 5.522 0 0 1 4.399-.932A2.987 2.987 0 0 0 10 3Zm.457 3.25l.805-.805c.49.35 1.09.555 1.738.555a2.99 2.99 0 0 0 1.878-.66c.08.374.122.762.122 1.16c0 1.21-.391 2.33-1.054 3.239l-3.49-3.489Zm2.827 4.241L9.75 6.957l-.605.605a7.469 7.469 0 0 1 1.823 4.24c.88-.243 1.672-.7 2.316-1.31ZM4.197 5.032c.243-.88.7-1.672 1.31-2.316L9.043 6.25l-.605.605a7.469 7.469 0 0 0-4.24-1.823ZM2.5 6A1.5 1.5 0 0 0 1 7.5v1A6.5 6.5 0 0 0 7.5 15h1a1.5 1.5 0 0 0 1.5-1.5v-1A6.5 6.5 0 0 0 3.5 6h-1Zm1.896 3.396a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708Z"></path>
      </svg>
      <h1>Vijana Sports System</h1>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/programs" className={({ isActive }) => (isActive ? "active" : "")}>
            Programs
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-youth" className={({ isActive }) => (isActive ? "active" : "")}>
            Enroll
          </NavLink>
        </li>
        <li>
          <NavLink to="/youths" className={({ isActive }) => (isActive ? "active" : "")}>
            Youth List
          </NavLink>
        </li>
        <li>
          <NavLink to="/enrollments" className={({ isActive }) => (isActive ? "active" : "")}>
            Enrollments
          </NavLink>
        </li>
        <li>
          <NavLink to="/patrons" className={({ isActive }) => (isActive ? "active" : "")}>
            Patrons
          </NavLink>
        </li>
        <li>
          <NavLink to="/patron-games" className={({ isActive }) => (isActive ? "active" : "")}>
            Patron Games
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
