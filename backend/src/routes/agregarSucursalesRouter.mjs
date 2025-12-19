import { Router } from 'express'
import { FormularioSucursal } from '../controllers/FormularioSucursal.mjs'

export class AgregarSucursalesRouter {
  constructor () {
    this.formularioSucursal = new FormularioSucursal()
  }

  inicio () {
    const router = Router()
    router.get('/', this.formularioSucursal.listarDatos.bind(this.formularioSucursal)) // Renderiza el formulario
    router.post('/', this.formularioSucursal.agregar.bind(this.formularioSucursal)) // Llama al controlador cuando se envíe el formulario
    return router
  }
}
