import React from 'react';
import './estilo1.css';

const PILLARS = [
  { icon: 'bi-heart-fill', title: 'Pasión', text: 'Cada plato que servimos nace de un amor profundo por los sabores auténticos del Perú.' },
  { icon: 'bi-leaf-fill', title: 'Frescura', text: 'Ingredientes frescos y de temporada seleccionados de los mejores productores locales.' },
  { icon: 'bi-award-fill', title: 'Tradición', text: 'Recetas ancestrales con técnicas ancestrales que honran la herencia culinaria peruana.' },
];

function QuienesSomos() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <h2>Quiénes Somos</h2>
        <p>Nuestra historia, filosofía y equipo</p>
      </div>

      <section className="about-section">
        {/* Hero image */}
        <img
          src="fondo1.png"
          alt="El equipo de EL DORADO"
          className="about-hero-img"
          loading="lazy"
        />

        {/* 3-column layout */}
        <div className="about-layout">
          {/* Left images */}
          <div className="about-images-col">
            <img src="Quien_1.jpg" alt="Interior del restaurante" loading="lazy" />
            <img src="Quien_2.jpg" alt="Preparación de platos" loading="lazy" />
          </div>

          {/* Center content */}
          <div className="about-content-card">
            <h2>Bienvenidos a EL DORADO</h2>
            <p>
              Un lugar donde la tradición culinaria peruana cobra vida en cada plato.
              Fundado con la pasión por los sabores auténticos y la herencia gastronómica
              de nuestro país, nos dedicamos a ofrecer una experiencia única que celebra
              la riqueza y diversidad de la cocina peruana.
            </p>

            <h3><i className="bi bi-book-half" aria-hidden="true" /> Nuestra Historia</h3>
            <p>
              EL DORADO nació del amor por la buena comida y el deseo de compartir
              las maravillas culinarias del Perú con el mundo. Desde nuestros inicios, hemos
              trabajado incansablemente para crear un espacio acogedor donde cada visita sea
              una celebración de los sentidos. Inspirados por las recetas tradicionales y los
              ingredientes frescos de nuestra tierra, hemos construido un menú que refleja la
              esencia de la costa, la sierra y la selva de Perú.
            </p>

            <h3><i className="bi bi-compass-fill" aria-hidden="true" /> Nuestra Filosofía</h3>
            <p>
              Creemos en el poder de la comida para unir a las personas y crear recuerdos
              duraderos. Nos esforzamos por mantener la autenticidad en cada plato, utilizando
              ingredientes de la más alta calidad y técnicas culinarias ancestrales. Nuestro
              compromiso es ofrecer una experiencia gastronómica que no solo deleite el paladar,
              sino que también cuente la historia de nuestras raíces.
            </p>

            <h3><i className="bi bi-people-fill" aria-hidden="true" /> El Equipo</h3>
            <p>
              Nuestro equipo está compuesto por talentosos chefs y personal de servicio
              dedicados a hacer de cada visita una experiencia inolvidable. Con una profunda
              comprensión de la cocina peruana y una pasión por la excelencia, desde el
              ceviche fresco de la costa hasta el reconfortante cuy chactado de la sierra,
              cada creación es una obra de arte culinaria.
            </p>
          </div>

          {/* Right images */}
          <div className="about-images-col">
            <img src="Quien_3.jpg" alt="Nuestros chefs" loading="lazy" />
            <img src="Quien_4.jpg" alt="Ambiente del restaurante" loading="lazy" />
          </div>
        </div>

        {/* Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
          }}
        >
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              style={{
                background: '#fff',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
              }}
            >
              <i
                className={`bi ${pillar.icon}`}
                style={{ fontSize: '2.2rem', color: 'var(--color-secondary)', marginBottom: '0.75rem', display: 'block' }}
                aria-hidden="true"
              />
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                {pillar.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;