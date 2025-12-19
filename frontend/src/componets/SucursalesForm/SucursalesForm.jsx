import React from 'react';
import '../../assets/styles.css'
import '../FormStyle.css'
import { useForm } from 'react-hook-form';
import SucursalesServices from '../../services/SucursalesServices'

const SucursalesForm = ({ datosPais, datosDepartamento, datosCiudad }) => {

    const { register, handleSubmit} = useForm();

    const enviar = async (data) => {
        try {
            const result = await SucursalesServices.addSucursal(data);
            console.log(result);
        } catch (error){
            console.error('Error submitting form:', error);
        }
    }
    return (
        <form className="form-container" id="form-container" onSubmit={handleSubmit(enviar)}>
            <div className="first-row">
                <div className="form-group">
                    <label for="nombre">Dirección</label>
                    <input type="text" id="nombre" {...register("direccion")} />
                </div>
            </div>
            <div className="first-row">
                <div className="form-group">
                    <label for="marca">País</label>
                    <select {...register("pais_id")}>
                        {datosPais.map((pais) => (
                            <option key={pais.id_pais} value={pais.id_pais}>
                                {pais.nombre}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div class="first-row">
                <div class="form-group">
                    <label for="marca">Departamento</label>
                    <select {...register("departamento_id")}>
                        {datosDepartamento.map((departamento) => (
                            <option key={departamento.id_departamento} value={departamento.id_departamento}>
                                {departamento.nombre}
                        </option>
                        ))}
                    </select>
                </div>
            </div>
            <div class="first-row">
                <div class="form-group">
                    <label for="marca">Ciudad</label>
                    <select {...register("idCiudad")}>
                        {datosCiudad.map((ciudad) => (
                            <option key={ciudad.id_ciudad} value={ciudad.id_ciudad}>
                                {ciudad.nombre}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <br/><br/>
            <button type="submit" className="btn-submit">Agregar</button>
        </form>
    );
}

export default SucursalesForm;