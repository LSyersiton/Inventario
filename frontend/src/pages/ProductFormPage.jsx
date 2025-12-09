import {useEffect, useState} from 'react';
import ProductForm from '../componets/ProductForm/ProductForm';
import ProductFormService from '../services/ProductFormService';
import Header from '../componets/Header/header';

function ProductFormPage() {
    const [datosTipoProducto, setTipoProducto] = useState([]);
    const [datosMarcas, setMarcas] = useState([]);

    useEffect(() => {
        const fetchProductFormData = async () => {
            try {
                const productFormData = await ProductFormService.getProductFormData();
                setTipoProducto(productFormData.tiposProducto);
                setMarcas(productFormData.marcas);
            } catch (error) {
                console.error('Error fetching product form data:', error);
            }
        };
        fetchProductFormData();
    }, []);
    return (
        <main className='main-container'>
            <Header />
            
            <section class="section-form">
                <div class="form-div">
                    <h2>Agregar Productos</h2>
                    <ProductForm 
                        datosTipoProducto={datosTipoProducto} 
                        datosMarcas={datosMarcas} 
                    />
                </div>
            </section>
        </main>
    );
}

export default ProductFormPage;