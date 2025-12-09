import React from 'react';
import '../../assets/styles.css'
import '../FormStyle.css'

function MarcasForm() {
    return (
        <form class="form-container" id="form-container" action="/agregar_marcas" method="POST">
            <div class="first-row">
                <div class="form-group">
                    <label for="nombre">Nombre de la marca:</label>
                    <input type="text" id="nombre" name="marca" placeholder="marca" required />
                </div>
        </div>
            <button type="submit" class="btn-submit">Agregar</button>
    </form>
    );
}

export default MarcasForm;