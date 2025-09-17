import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">
        <NavLink to="/">Food Blog</NavLink>
      </h2>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-recipe"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              My Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
