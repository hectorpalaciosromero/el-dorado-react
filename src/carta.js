import React, { useState } from 'react';
import './estilo1.css';

const CATEGORIES = [
  {
    id: 'entradas',
    label: 'Entradas',
    icon: 'bi-egg-fried',
    items: [
      { name: 'Causa de Pollo', price: 'S/ 10', img: 'entrada.png', desc: 'Causa limeña rellena con pollo desmechado' },
      { name: 'Tequeños', price: 'S/ 12', img: 'entrada1.jpeg', desc: 'Palitos de queso frito crujiente' },
      { name: 'Leche de Tigre', price: 'S/ 15', img: 'leche_de_tigre.png', desc: 'Leche de tigre clásica con ají y culantro' },
      { name: 'Ocopa Arequipeña', price: 'S/ 13', img: 'entrada.png', desc: 'Papas con salsa de maní, queso y ají mirasol' },
    ],
  },
  {
    id: 'principales',
    label: 'Platos Principales',
    icon: 'bi-star-fill',
    items: [
      { name: 'Ceviche Clásico', price: 'S/ 25', img: 'comida1.png', desc: 'Pescado fresco, limón, cebolla y ají limo' },
      { name: 'Ceviche Mixto', price: 'S/ 25', img: 'comida1.png', desc: 'Pescado, mariscos, camote y choclo' },
      { name: 'Ceviche de Pota', price: 'S/ 27', img: 'comida1.png', desc: 'Pota fresca en leche de tigre casera' },
      { name: 'Ají de Gallina', price: 'S/ 24', img: 'arroz-con-pollo.png', desc: 'Gallina en crema de ají amarillo y pan' },
      { name: 'Lomo Saltado', price: 'S/ 27', img: 'arroz-con-pollo.png', desc: 'Lomo fino salteado al wok con papas fritas' },
      { name: 'Arroz con Pollo', price: 'S/ 25', img: 'arroz-con-pollo.png', desc: 'Arroz verde con leche, pollo y culantro' },
      { name: 'Arroz con Pato', price: 'S/ 25', img: 'arroz-con-pollo.png', desc: 'Pato norteño en ccori arroz con culantro' },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    icon: 'bi-cake2-fill',
    items: [
      { name: 'Arroz con Leche', price: 'S/ 8', img: 'postre.png', desc: 'Cremoso arroz con leche y canela' },
      { name: 'Crema Volteada', price: 'S/ 9', img: 'postre.png', desc: 'Flan suave de vainilla' },
      { name: 'Suspiro a la Limeña', price: 'S/ 11', img: 'postre.png', desc: 'Manjar blanco con merengue de oporto' },
      { name: 'Leche Asada', price: 'S/ 12', img: 'Leche-Asada.png', desc: 'Postre horneado de leche y huevo' },
      { name: 'Picarones', price: 'S/ 14', img: 'postre.png', desc: 'Buñuelos de camote con miel de chancaca' },
      { name: 'Mazamorra Morada', price: 'S/ 8', img: 'postre.png', desc: 'Postre tradicional de maíz morado' },
      { name: 'King Kong', price: 'S/ 11', img: 'postre.png', desc: 'Galleta de mantequilla con manjar' },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    icon: 'bi-cup-straw',
    items: [
      { name: 'Chicha Morada', price: 'S/ 6', img: 'bebida1.png', desc: 'Bebida morada artesanal con especias' },
      { name: 'Limonada', price: 'S/ 6', img: 'bebida1.png', desc: 'Limonada fresca con hierbabuena' },
      { name: 'Pisco Sour', price: 'S/ 15', img: 'bebida12.png', desc: 'Sour clásico con pisco quebranta' },
      { name: 'Chilcano', price: 'S/ 16', img: 'bebida12.png', desc: 'Pisco con ginger ale y limón' },
    ],
  },
];

function Carta() {
  const [activeTab, setActiveTab] = useState('entradas');

  const currentCategory = CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section className="carta-section">
      {/* Header */}
      <div className="page-header" style={{ marginBottom: 0, borderRadius: 0 }}>
        <h2>Nuestra Carta</h2>
        <p>Lo mejor de la gastronomía peruana</p>
      </div>

      <div style={{ padding: '2.5rem 0' }}>
        {/* Tabs */}
        <div className="carta-tabs" role="tablist" aria-label="Categorías del menú">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`carta-tab${activeTab === cat.id ? ' active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <i className={`bi ${cat.icon}`} aria-hidden="true" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Section title */}
        <h3 className="section-title">{currentCategory.label}</h3>
        <div className="section-divider">
          <span className="divider-icon">
            <i className="bi bi-diamond-fill" />
          </span>
        </div>

        {/* Cards grid */}
        <div className="carta-grid" role="tabpanel">
          {currentCategory.items.map((item) => (
            <article key={item.name} className="carta-card">
              <img
                src={item.img}
                alt={item.name}
                className="carta-card-img"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="carta-card-body">
                <h4 className="carta-card-name">{item.name}</h4>
                <p className="carta-card-desc">{item.desc}</p>
                <span className="carta-card-price">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carta;
