import { Router } from 'express'
import { ProductoController } from '../controllers/productoController.mjs'
import { upload } from '../config/multer.mjs'
import { dirname } from 'path'

export class AgregarProductoRouter {
  constructor () {
    this.productoController = new ProductoController()
  }

  inicio () {
    const router = Router()
    router.get('/', (req, res) => this.productoController.listarDatosAgregar(req, res)) // Renderiza el formulario
    router.get('/', (req, res) => this.productoController.listarDatos(req, res))
    router.post('/', (req, res, next) => {
      console.log('👉 ENTRA A LA RUTA /agregar_producto')
      console.log('CWD:', process.cwd())
      console.log(dirname(import.meta.url))
      next()
    }, upload.single('imagen'), (req, res) => this.productoController.agregar(req, res)) // Maneja el envío del formulario
    return router
  }
}
