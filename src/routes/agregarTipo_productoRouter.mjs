import { Router } from 'express'
import { TipoProductoController } from '../controllers/tipoProductoController.mjs'

export class AgregarTipoProductoRouter {
  constructor () {
    this.agregarTipoProductoController = new TipoProductoController()
  }

  inicio () {
    const router = Router()
    router.get('/', (req, res) => {
      res.render('agregarTipo_producto') // Asegúrate de que existe "views/agregar_tipo_producto.ejs"
    })
    router.post('', this.agregarTipoProductoController.agregar.bind(
      this.agregarTipoProductoController))
    return router
  }
}
