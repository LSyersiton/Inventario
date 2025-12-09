import MarcasForm from "../componets/MarcasForm/MarcasForm";
import Header from "../componets/Header/header";

function MarcasFormPage() {
  return (
    <main className="main-container">
        <Header />
        <section class="section-form">
            <div class="form-div" id="form-div">
                <h2>Agregar marcas</h2>
                <MarcasForm />
            </div>
        </section>
    </main>
  );
}
export default MarcasFormPage;