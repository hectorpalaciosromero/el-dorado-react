import React, { useState } from 'react';
import './estilo1.css';

const LOCATIONS = [
  {
    id: 'miraflores-centro',
    name: 'EL DORADO - Parque Kennedy',
    address: 'Av. Diagonal 340, Miraflores 15074',
    phone: '984 555 123',
    desc: 'Ubicado en el corazón de Miraflores frente al Parque Kennedy, este restaurante es un oasis culinario. Con decoración moderna y ambiente elegante, ofrece a los comensales una experiencia exquisita.',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9997103723385!2d-77.03223122409053!3d-12.119033343169055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8163f974797%3A0x6bba3bc7a4990da4!2sParque%20Kennedy!5e0!3m2!1ses!2spe!4v1719948490469!5m2!1ses!2spe',
  },
  {
    id: 'miraflores-malecon',
    name: 'EL DORADO - Malecón Cisneros',
    address: 'Malecón Cisneros 1420, Miraflores 15074',
    phone: '942 888 456',
    desc: 'Frente al mar en el hermoso Malecón de Miraflores, con impresionantes vistas del océano Pacífico. Cuenta con ventanales amplios y terraza al aire libre para disfrutar los atardeceres.',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.077673523428!2d-77.0428751!3d-12.1136979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83d49a42105%3A0x286f9b6cd5dbfcd1!2sMalec%C3%B3n%20Cisneros!5e0!3m2!1ses!2spe!4v1719948490469!5m2!1ses!2spe',
  },
  {
    id: 'miraflores-larcomar',
    name: 'EL DORADO - Larcomar',
    address: 'Malecón de la Reserva 610, Miraflores 15074',
    phone: '999 333 789',
    desc: 'Ubicado dentro del exclusivo centro comercial Larcomar. Ideal para cenas románticas al atardecer con el relajante sonido de las olas y la brisa marina.',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.541602737664!2d-77.03713028261718!3d-12.127815299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c819bc8d2ec1%3A0xe9f7addba273b4d8!2sLarcomar!5e0!3m2!1ses!2spe!4v1719948490469!5m2!1ses!2spe',
  },
];

function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Por favor ingresa tu nombre.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = 'Ingresa un email válido.';
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = 'El mensaje debe tener al menos 10 caracteres.';
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSending(true);
    // Simulate async send
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  }

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <h2>Contacto</h2>
        <p>Encuéntranos en nuestras exclusivas sedes de Miraflores</p>
      </div>

      <section className="contact-section">
        {/* Locations */}
        <h3 className="section-title">Nuestras Sedes</h3>
        <div className="section-divider">
          <span className="divider-icon"><i className="bi bi-diamond-fill" /></span>
        </div>

        <div className="locations-grid">
          {LOCATIONS.map((loc, idx) => (
            <article
              key={loc.id}
              className="location-card"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <iframe
                src={loc.mapSrc}
                title={`Mapa de ${loc.name}`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="location-card-body">
                <h4 className="location-card-name">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                  {loc.name}
                </h4>
                <p className="location-card-address">
                  <i className="bi bi-signpost-fill" aria-hidden="true" />
                  {loc.address}
                </p>
                <p className="location-card-phone">
                  <i className="bi bi-telephone-fill" aria-hidden="true" />
                  {loc.phone}
                </p>
                <p className="location-card-desc">{loc.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Contact form */}
        <div className="contact-form-section">
          {sent ? (
            <div className="form-success">
              <i className="bi bi-check-circle-fill form-success-icon" aria-hidden="true" />
              <h4>¡Mensaje enviado!</h4>
              <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
              <button
                className="btn-primary-custom"
                style={{ marginTop: '1rem', width: 'auto', padding: '0.7rem 2rem' }}
                onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <>
              <h3>Déjanos tu comentario</h3>
              <p className="form-sub">Cuéntanos tu experiencia o haz una reserva</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Tu nombre</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="José García"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <small style={{ color: 'var(--color-primary)', marginTop: '0.25rem', display: 'block' }}>
                      {errors.name}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Correo electrónico</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <small style={{ color: 'var(--color-primary)', marginTop: '0.25rem', display: 'block' }}>
                      {errors.email}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Tu opinión o consulta</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Escribe aquí tu mensaje..."
                    rows={4}
                  />
                  {errors.message && (
                    <small style={{ color: 'var(--color-primary)', marginTop: '0.25rem', display: 'block' }}>
                      {errors.message}
                    </small>
                  )}
                </div>

                <button type="submit" className="btn-primary-custom" disabled={sending}>
                  {sending ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill" aria-hidden="true" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contacto;
