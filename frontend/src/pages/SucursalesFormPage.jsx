import { useEffect, useState } from "react";
import SucursalesForm from "../componets/SucursalesForm/SucursalesForm";
import SucursalesServices from "../services/SucursalesServices";
import Header from "../componets/Header/header";

function SucursalesFormPage() {
    const [datosPais, setDatosPais] = useState([]);
    const [datosDepartamento, setDatosDepartameto] = useState([]);
    const [datosCiudad, setDatosCiudad] = useState([]);

    useEffect(() => {
        const fetchSucursalesFormData = async () => {
            try {
                const sucursalesData = await SucursalesServices.getSucursales();
                setDatosCiudad(sucursalesData.datosCiudad);
                setDatosDepartameto(sucursalesData.datosDepartamento);
                setDatosPais(sucursalesData.datosPais);
                
            } catch (error) {
                console.error("Error fetching sucursales form data:", error);
            }
        };
        fetchSucursalesFormData();
}, []);

    return (
        <main className="main-container">
            <Header />
            
            <section class="section-form">
                <div class="form-div" id="form-div">
                    <h2 class="title-section">Agregar Sucursales</h2>
                    <SucursalesForm 
                        datosPais={datosPais} 
                        datosDepartamento={datosDepartamento} 
                        datosCiudad={datosCiudad} 
                    />
                </div>
            </section>
           </main> 
    );
}

export default SucursalesFormPage;