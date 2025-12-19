import React from 'react';
import '../../assets/styles.css'
import '../FormStyle.css'
import TipoProductServices from '../../services/TipoProductoService'
import { useForm } from 'react-hook-form';

const TipoProductFormPage = () => {

const { register, handleSubmit} = useForm();
const enviar = (data) => {
    console.log(data);
    TipoProductServices.postTipoProducto(data);
}

  return (
    <form className="form-container" id="form-container" onSubmit={handleSubmit(enviar)} >
        <div className="first-row">
            <div className="form-group">
                <label for="nombre">Dirección</label>
                <input type="text" id="nombre" placeholder="nombre" {...register("tipoProducto")} /> 
            </div>
        </div>
        <button type="submit" class="btn-submit">Agregar</button>
    </form>
    );
}

export default TipoProductFormPage;