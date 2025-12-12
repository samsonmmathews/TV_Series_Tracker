import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar-container">
        <NavLink className="navbar-logo" to={"/"}>TV Tracker</NavLink>
        <div className="navbar-links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/series"}>Series</NavLink>
          <NavLink to={"/companies"}>Companies</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}
