import { Router } from 'express'
import { FormularioMarcas } from '../controllers/FormularioMarcas.mjs'

export class AgregarMarcasRouter {
  constructor () {
    this.formularioMarcas = new FormularioMarcas()
  }

  inicio () {
    const router = Router()
    router.get('/', (req, res) => {
      res.render('agregar_marcas') // Asegúrate de que existe "views/agregar.ejs"
    })
    router.post('/', this.formularioMarcas.agregar.bind(
      this.formularioMarcas)) // Llama al controlador cuando se envíe el formulario
    return router
  }
}
