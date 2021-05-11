import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">Главная</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/employees/" className="nav-link">Сотрудники</Link>
        </li>
      </ul>

        </div>
    </nav>
    );
}

export default Header;