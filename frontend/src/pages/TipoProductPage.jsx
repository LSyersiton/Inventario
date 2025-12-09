import Header from "../componets/Header/header";
import TipoProductForm from "../componets/TipoProductForm/TipoProductForm";

function TipoProductPage() {
    return (
        <main className="main-container">
            <Header />
            <section class="section-form">
                <div class="form-div" id="form-div">
                    <h2>Agregar Productos</h2>
                    <TipoProductForm />
                </div>
            </section>
        </main>
    );
}
export default TipoProductPage;