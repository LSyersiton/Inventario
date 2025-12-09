import React from 'react';
import '../../assets/styles.css'
import '../FormStyle.css'

function SucursalesForm({ datosPais, datosDepartamento, datosCiudad }) {
    return (
        <form class="form-container" id="form-container" method="POST" action="/agregar_sucursales" enctype="multipart/form-data">
            <div class="first-row">
                <div class="form-group">
                    <label for="nombre">Dirección</label>
                    <input type="text" id="nombre" name="direccion" placeholder="nombre" required />
                </div>
            </div>
            <div class="first-row">
                <div class="form-group">
                    <label for="marca">País</label>
                    <select name="pais_id" required>
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
                    <select name="departamento_id" required>
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
                    <select name="idCiudad">
                        {datosCiudad.map((ciudad) => (
                            <option key={ciudad.id_ciudad} value={ciudad.id_ciudad}>
                                {ciudad.nombre}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <br/><br/>
            <button type="submit" class="btn-submit">Agregar</button>
        </form>
    );
}

export default SucursalesForm;