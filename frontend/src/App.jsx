import {Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import MarcasForm from './pages/MarcasForm.jsx'
import TipoProductFormPage from './pages/TipoProductPage.jsx'
import SucursalesFormPage from './pages/SucursalesFormPage.jsx'
import ProductFormPage from './pages/ProductFormPage.jsx'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agregar_marcas' element={<MarcasForm /> } />
      <Route path='/agregarTipo_producto' element={<TipoProductFormPage />} />
      <Route path='/agregar_sucursales' element={ <SucursalesFormPage />} />
      <Route path='/agregar' element={ <ProductFormPage/>} />
    </Routes>
    </>
  )
}

export default App
