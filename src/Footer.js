import React from 'react';
import { Link } from 'react-router-dom';
import './estilo1.css';

const QUICK_LINKS = [
  { label: 'Inicio', to: '/Carta' },
  { label: 'Quiénes Somos', to: '/quienesomos' },
  { label: 'Productos', to: '/productos' },
  { label: 'Proveedores', to: '/Proveedores' },
  { label: 'Contacto', to: '/contacto' },
];

const SOCIAL = [
  { icon: 'bi-instagram', href: 'https://instagram.com/', label: 'Instagram' },
  { icon: 'bi-facebook', href: 'https://facebook.com/', label: 'Facebook' },
  { icon: 'bi-tiktok', href: 'https://tiktok.com/', label: 'TikTok' },
];

const TEAM = [
  'Hector Palacios'
];

function Footer() {
  const year = 2024;

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand column */}
        <div>
          <p className="footer-brand-name">
            <i className="bi bi-bowl-hot-fill" style={{ color: 'var(--color-secondary)', marginRight: '0.4rem' }} aria-hidden="true" />
            EL DORADO
          </p>
          <p className="footer-tagline">Auténtica cocina peruana desde el corazón de Lima.</p>
          <div className="footer-social" aria-label="Redes sociales">
            {SOCIAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <i className={`bi ${s.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-col">
          <h4>Contáctanos</h4>
          <address>
            <p><i className="bi bi-geo-alt-fill" aria-hidden="true" /> Av. Diagonal 340, Miraflores</p>
            <p><i className="bi bi-geo-alt-fill" aria-hidden="true" /> Malecón Cisneros 1420, Miraflores</p>
            <p><i className="bi bi-geo-alt-fill" aria-hidden="true" /> Malecón de la Reserva 610, Miraflores</p>
            <br />
            <p><i className="bi bi-telephone-fill" aria-hidden="true" /> 984 555 123</p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} EL DORADO. Todos los derechos reservados.</p>
        <p className="footer-team">
          Desarrollado: {TEAM.join(' · ')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
