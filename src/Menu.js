import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './estilo1.css';

const NAV_LINKS = [
  { label: 'Inicio', to: '/Carta' },
  { label: 'Quiénes Somos', to: '/quienesomos' },
  {
    label: 'Productos',
    to: '/productos',
    children: [{ label: 'Proveedores', to: '/Proveedores' }],
  },
  { label: 'Contacto', to: '/contacto' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar-custom${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <Link to="/" className="navbar-brand-title" aria-label="EL DORADO - Inicio">
          <i className="bi bi-bowl-hot-fill brand-icon" aria-hidden="true" />
          EL DORADO
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal">
          <ul className="navbar-links">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <li key={item.label} className="nav-dropdown">
                  <Link
                    to={item.to}
                    aria-haspopup="true"
                  >
                    {item.label} <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem' }} />
                  </Link>
                  <ul className="nav-dropdown-menu" role="menu">
                    {item.children.map((child) => (
                      <li key={child.label} role="none">
                        <Link to={child.to} role="menuitem">
                          <i className="bi bi-arrow-right-short" /> {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger-btn${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Menú móvil">
        {NAV_LINKS.flatMap((item) => {
          const links = [<Link key={item.label} to={item.to}>{item.label}</Link>];
          if (item.children) {
            item.children.forEach((child) => {
              links.push(
                <Link key={child.to} to={child.to} className="mobile-sub">
                  └ {child.label}
                </Link>
              );
            });
          }
          return links;
        })}
      </nav>
    </header>
  );
}

export default Navbar;
