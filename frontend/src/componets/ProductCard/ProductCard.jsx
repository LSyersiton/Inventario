import React from 'react';
import './ProductCard.css';
import '../../assets/styles.css';

function ProductCard({ producto }) {
  return (
    <article className="card-product">
      <div className="title">
        <h3>{producto.nombre}</h3>
      </div>

      <div className="body-card">
        <img src={`/img/${producto.imagen}`} alt={producto.nombre} />
      </div>

      <div className="footer-card">
        <p>{producto.descripcion}</p>
        <p>Stock: {producto.stock}</p>
        <p>Precio: ${producto.precio}</p>

        <div className="button-container">
          <button className="button button-buy">Comprar</button>
          <button className="button button-see">Ver producto</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
  