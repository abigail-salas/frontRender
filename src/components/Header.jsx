import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Plan de Viajes</h1>
      <nav>
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/add" className="nav-link">
          Agregar Viaje
        </Link>
      </nav>
    </header>
  );
};

export default Header;
