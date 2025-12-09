import '../../assets/styles.css'
import '../FormStyle.css'
import React from 'react';

function ProductForm({ datosTipoProducto, datosMarcas }) {
    return (
        <form class="form-container" id="form-container" method="post" action="/agregar" enctype="multipart/form-data">
        <div class="first-row">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombres" name="nombre" placeholder="nombre del producto" required/>
            </div>
            <div class="form-group">
                <label for="precio">Precio</label>
                <input type="number" id="precio" name="precio" placeholder="precio" required/>
            </div>
        </div>
        <div class="form-group">
            <label for="stock">Stock</label>
            <input type="number" id="stock" name="stock" placeholder="stock" required/>
        </div>
        <div class="first-row">
            <div class="form-group">
                <label for="marca">Marca</label>
                <select id="marca" name="idMarca" required>
                    {datosMarcas.map((marca) => (
                    <option key={marca.id_marcas} value={marca.id_marcas}>
                        {marca.nombres}
                    </option>
                    ))}
                </select>
            </div>
            <div class="form-group">
                <label for="categoria">Tipo de producto</label>
                <select id="categoria" name="idTipoProducto" required>
                    {datosTipoProducto.map((tipo) => (
                    <option key={tipo.id_tipo_producto} value={tipo.id_tipo_producto}>
                        {tipo.nombre}
                    </option>
                    ))}
                </select>
            </div>
        </div>
            <div class="form-group">
                <label for="imagen">Imagen</label>
                <input type="file" id="imagen" name="imagen" accept="imagen/*" required/>
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea id="descripcion" name="descripcion" placeholder="descripcion" required></textarea>
            </div>
            <button type="submit" class="btn-submit">Agregar</button>
    </form>
    );
}
export default ProductForm;