import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/imc" className="nav-link">
          IMC
        </NavLink>
        <NavLink to="/ppt" className="nav-link">
          Piedra Papel Tijera
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
