import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      {/* Seção Superior */}
      <div className="header-top">
        <div className="header-top-container">
          <div className="logo">
            <h1>XP GAMER</h1>
          </div>
          <div className="auth-links">
            <button
              id="theme-toggle"
              className="theme-toggle"
              title="Alternar tema"
              onClick={() => {
                // Coloque aqui a lógica de alternar tema
                console.log("Tema alternado!");
              }}
            >
              <span className="theme-icon">🌙</span>
            </button>
            <Link to="/login" className="login-btn"> Login </Link>
          </div>
        </div>
      </div>

      {/* Seção Inferior com Navegação */}
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projeto">Projeto</Link>
            </li>
            <li>
              <Link to="/avaliacoes">Avaliações</Link>
            </li>
            <li>
              <Link to="/fale-conosco">Fale Conosco</Link>
            </li>
          </ul>
          <div className="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
