import React from 'react';
import { useForm } from 'react-hook-form';
import MarcasServices from '../../services/MarcasService'
import '../../assets/styles.css'
import '../FormStyle.css'

const MarcasForm = () => {

    const { register, handleSubmit} = useForm();

    const enviar = (data) => {
        console.log(data);
        MarcasServices.postMarca(data);
    }

    return (
        <form className="form-container" id="form-container" onSubmit={handleSubmit(enviar)}>
            <div class="first-row">
                <div class="form-group">
                    <label for="nombre">Nombre de la marca:</label>
                    <input type="text" id="nombre" placeholder="marca" {...register("marca")} />
                </div>
        </div>
            <button type="submit" class="btn-submit">Agregar</button>
    </form>
    );
}

export default MarcasForm;