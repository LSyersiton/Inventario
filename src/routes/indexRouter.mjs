import { Router } from 'express'
import { ProductoController } from '../controllers/productoController.mjs'

export class IndexRouter {
  constructor () {
    this.productoController = new ProductoController()
  }

  inicio () {
    const router = Router()

    router.get('/', (req, res) => this.productoController.listarDatosProductos(req, res))
    return router
  }
}
