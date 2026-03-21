import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" id="main-header">
      <div className="logo">
        <Link to="/">
          <img src="/logo/logo-roadmap.svg" alt="ROADMAP - Vehicle Repair & Maintenance Specialists" />
        </Link>
      </div>
      <nav className="nav" role="navigation">
        <button
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          id="hamburger-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} id="nav-list">
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;