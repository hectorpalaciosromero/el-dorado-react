import React from 'react';
import './estilo1.css';

const SUPPLIERS = [
  {
    id: 'lima',
    title: 'Lima',
    region: 'Costa del Pacífico',
    regionIcon: 'bi-water',
    img: 'pesca.png',
    text: 'En EL DORADO nos enorgullece ofrecer los mejores sabores del mar, frescos y de alta calidad provenientes de la costa limeña. Trabajamos estrechamente con proveedores locales que nos suministran pescados y mariscos capturados de manera sostenible en las aguas del Pacífico, asegurando que cada insumo cumpla con los más altos estándares de frescura y sabor.',
    reverse: false,
  },
  {
    id: 'cusco',
    title: 'Cusco',
    region: 'Sierra de los Andes',
    regionIcon: 'bi-triangle-fill',
    img: 'comida_cuzco.png',
    text: 'Importamos los mejores insumos desde Cusco para llevar los sabores auténticos de los Andes a su mesa. Trabajamos con agricultores locales que nos suministran café, maíz, palta y alcachofa cultivados en las fértiles tierras cusqueñas, garantizando que cada ingrediente sea una muestra excepcional de la riqueza agrícola andina.',
    reverse: true,
  },
  {
    id: 'cajamarca',
    title: 'Cajamarca',
    region: 'Norte del Perú',
    regionIcon: 'bi-tree-fill',
    img: 'comida-tipica-cajamarca.png',
    text: 'Cajamarca es uno de nuestros principales proveedores de frutos, menestras y quesos de alta calidad. Cada plato que servimos refleja nuestra pasión por la cocina y nuestro compromiso con la excelencia y la sostenibilidad, honrando a cada productor cajamarquino que hace posible nuestra propuesta culinaria.',
    reverse: false,
  },
];

function Proveedores() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <h2>Nuestros Proveedores</h2>
        <p>Calidad desde el origen hasta tu mesa</p>
      </div>

      <section className="suppliers-section">
        <h3 className="section-title">De las Mejores Regiones del Perú</h3>
        <div className="section-divider">
          <span className="divider-icon"><i className="bi bi-diamond-fill" /></span>
        </div>

        {SUPPLIERS.map((supplier) => (
          <div
            key={supplier.id}
            className={`supplier-block${supplier.reverse ? ' reverse' : ''}`}
          >
            <div className="supplier-img-wrap">
              <img src={supplier.img} alt={`Proveedor de ${supplier.title}`} loading="lazy" />
            </div>

            <div className="supplier-content">
              <h2>{supplier.title}</h2>
              <span className="supplier-region-badge">
                <i className={`bi ${supplier.regionIcon}`} aria-hidden="true" />
                {supplier.region}
              </span>
              <p>{supplier.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Proveedores;