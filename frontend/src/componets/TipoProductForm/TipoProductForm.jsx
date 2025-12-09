import React from 'react';
import '../../assets/styles.css'
import '../FormStyle.css'

function TipoProductFormPage() {
  return (
    <form class="form-container" id="form-container" action="/agregarTipo_producto" method="POST">
        <div class="first-row">
            <div class="form-group">
                <label for="nombre">Dirección</label>
                <input type="text" id="nombre" name="tipoProducto" placeholder="nombre" required/> 
            </div>
        </div>
        <button type="submit" class="btn-submit">Agregar</button>
    </form>
    );
}

export default TipoProductFormPage;