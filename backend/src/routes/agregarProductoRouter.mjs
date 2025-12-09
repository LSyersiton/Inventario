import { Router } from 'express'
import { ProductoController } from '../controllers/productoController.mjs'
import { upload } from '../config/multer.mjs'

export class AgregarProductoRouter {
  constructor () {
    this.productoController = new ProductoController()
  }

  inicio () {
    const router = Router()
    router.get('/', (req, res) => this.productoController.listarDatosAgregar(req, res)) // Renderiza el formulario
    router.get('/', (req, res) => this.productoController.listarDatos(req, res))
    router.post('', upload.single('imagen'), (req, res) => this.productoController.agregar(req, res)) // Maneja el envío del formulario
    return router
  }
}
