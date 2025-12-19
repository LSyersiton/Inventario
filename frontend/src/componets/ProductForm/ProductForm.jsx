import React from 'react';
import '../../assets/styles.css'
import '../FormStyle.css'
import { useForm } from 'react-hook-form';
import ProductServices from '../../services/ProductServices'

const ProductForm = ({ datosTipoProducto, datosMarcas }) => {

    const { register, handleSubmit} = useForm();

    const enviar = async (data) => {
        try {
            const result = await ProductServices.addProduct(data);
            console.log(result);
        } catch (error){
            console.error('Error submitting form:', error);
        }
    }

    return (
        <form className="form-container" id="form-container" onSubmit={handleSubmit(enviar)} >
        <div class="first-row">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombres" placeholder="nombre del producto" {...register("nombre")} />
            </div>
            <div class="form-group">
                <label for="precio">Precio</label>
                <input type="number" id="precio" placeholder="precio" {...register("precio")} />
            </div>
        </div>
        <div class="form-group">
            <label for="stock">Stock</label>
            <input type="number" id="stock" placeholder="stock" {...register("stock")} />
        </div>
        <div class="first-row">
            <div class="form-group">
                <label for="marca">Marca</label>
                <select id="marca" {...register("idMarca")} >
                    {datosMarcas.map((marca) => (
                    <option key={marca.id_marcas} value={marca.id_marcas}>
                        {marca.nombres}
                    </option>
                    ))}
                </select>
            </div>
            <div class="form-group">
                <label for="categoria">Tipo de producto</label>
                <select id="categoria" {...register("idTipoProducto")}>
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
                <input type="file" id="imagen" accept="imagen/*" {...register("imagen")} />
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea id="descripcion" placeholder="descripcion" {...register("descripcion")} ></textarea>
            </div>
            <button type="submit" class="btn-submit">Agregar</button>
    </form>
    );
}
export default ProductForm;