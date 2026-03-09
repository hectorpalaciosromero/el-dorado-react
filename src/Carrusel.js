import React from 'react';
import { Link } from 'react-router-dom';
import './estilo1.css';

const SLIDES = [
  {
    src: 'fondo1.png',
    alt: 'Bienvenidos a EL DORADO',
    interval: 8000, // 8 seconds for the main slide
  },
  {
    src: 'imagen_banner_comida1.jpg',
    alt: 'Los mejores sabores del Perú',
    interval: 5000,
  },
  {
    src: 'imagen_banner_comida3.jpg',
    alt: 'Tradición culinaria peruana',
    interval: 5000,
  },
];

function HeroCarousel() {
  return (
    <section className="hero-carousel" aria-label="Banner principal">
      {/* Hero overlay with text */}
      <div className="hero-overlay">
        <p className="hero-tagline">
          <i className="bi bi-star-fill" /> Auténtica Cocina Peruana <i className="bi bi-star-fill" />
        </p>
        <h1 className="hero-title">EL DORADO</h1>
        <p className="hero-subtitle">
          Donde la tradición culinaria del Perú cobra vida en cada plato.<br />
          Costa, Sierra y Selva en tu mesa.
        </p>
        <Link to="/Carta" className="hero-cta">
          <i className="bi bi-journal-richtext" />
          Ver Nuestra Carta
        </Link>
      </div>

      {/* Bootstrap Carousel */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.src}
              className={`carousel-item${idx === 0 ? ' active' : ''}`}
              data-bs-interval={slide.interval}
            >
              <img
                src={slide.src}
                className="d-block w-100"
                alt={slide.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
          aria-label="Diapositiva anterior"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
          aria-label="Siguiente diapositiva"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default HeroCarousel;
