import React from 'react';
import './estilo1.css';

const PRODUCTS = [
  {
    id: 'costa',
    img: 'Costa.jpg',
    title: 'Costa',
    badge: 'Mariscos & Pescados',
    badgeIcon: 'bi-water',
    excerpt:
      'El acceso al océano Pacífico proporciona una abundante fuente de mariscos y pescados frescos. Los sabores son cítricos y picantes, con ajíes y limones frescos.',
    highlights: [
      'Ceviche Clásico y Mixto',
      'Ají de Gallina',
      'Tacu Tacu',
    ],
  },
  {
    id: 'sierra',
    img: 'Sierra.jpg',
    title: 'Sierra',
    badge: 'Tradición Andina',
    badgeIcon: 'bi-triangle-fill',
    excerpt:
      'La cocina andina usa ingredientes nativos como papa, maíz y quinua. Platos sustanciosos cocinados con técnicas milenarias que reflejan la historia indígena.',
    highlights: [
      'Pachamanca',
      'Rocoto Relleno',
      'Cuy Chactado',
    ],
  },
  {
    id: 'selva',
    img: 'Selva.jpg',
    title: 'Selva',
    badge: 'Amazonía Vibrante',
    badgeIcon: 'bi-tree-fill',
    excerpt:
      'La selva amazónica ofrece sabores exóticos con plátano, yuca y hierbas únicas. Platos ricos preparados con hojas de bijao y técnicas tradicionales.',
    highlights: [
      'Juanes',
      'Tacacho con Cecina',
      'Inchicapi',
    ],
  },
];

function Productos() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <h2>Nuestros Productos</h2>
        <p>La riqueza culinaria de las tres regiones del Perú</p>
      </div>

      <section className="products-section">
        <h3 className="section-title">Costa, Sierra y Selva</h3>
        <div className="section-divider">
          <span className="divider-icon"><i className="bi bi-diamond-fill" /></span>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((product, idx) => (
            <article
              key={product.id}
              className="product-card"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="product-card-img-wrap">
                <img src={product.img} alt={product.title} loading="lazy" />
                <div className="product-card-img-overlay" aria-hidden="true" />
                <span className="product-card-img-title">{product.title}</span>
              </div>

              <div className="product-card-body">
                <span className="product-badge">
                  <i className={`bi ${product.badgeIcon}`} aria-hidden="true" />
                  {product.badge}
                </span>
                <p>{product.excerpt}</p>

                <ul
                  style={{
                    marginTop: '1rem',
                    paddingLeft: '0',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  {product.highlights.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--color-text)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        margin: 0,
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{ color: 'var(--color-secondary)', flexShrink: 0 }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Productos;