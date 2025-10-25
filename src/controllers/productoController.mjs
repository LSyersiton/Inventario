import { ProductosModel } from '../models/productosModel.mjs'
import { TipoProductoModel } from '../models/tipoProductoModel.mjs'
import { MarcasModel } from '../models/marcasModel.mjs'

export class ProductoController {
  constructor () {
    this.productosModel = new ProductosModel()
    this.tipoProductoModel = new TipoProductoModel()
    this.marcasModel = new MarcasModel()
  }

  async listarDatosAgregar (req, res) {
    try {
      const tiposProducto = await this.tipoProductoModel.obtenerTodos()
      const marcas = await this.marcasModel.obtenerTodos()
      res.render('agregar_productos', {
        tiposProducto,
        marcas
      })
    } catch (error) {
      console.error('Error al listar los datos:', error)
      res.status(500).send('Error al listar los datos')
    }
  }

  async listarDatosProductos (req, res) {
    try {
      const productos = await this.productosModel.obtenerTodos()
      res.render('index', {
        productos
      })
    } catch (error) {
      console.error('Error al listar los datos:', error)
      res.status(500).send('Error al listar los datos')
    }
  }

  async agregar (req, res) {
    try {
      const { nombre, precio, stock, idMarca, idTipoProducto, descripcion } = req.body
      const imagen = req.file ? req.file.filename : null
      console.log('IMAGEN:', imagen)
      await this.productosModel.agregarProducto(nombre, descripcion, precio, stock, imagen, idTipoProducto, idMarca)
      res.redirect('/agregar') // Redirige a la página de agregar productos después de agregar uno nuevo
    } catch (error) {
      console.error('Error al agregar el producto:', error)
      res.status(500).send('Error al agregar el producto')
    }
  }

  async eliminar (req, res) {
    try {
      const { id } = req.params
      await this.productosModel.eliminarProducto(id)
      res.redirect('/agregar') // Redirige a la página de agregar productos después de eliminar uno
    } catch (error) {
      console.error('Error al eliminar el producto:', error)
      res.status(500).send('Error al eliminar el producto')
    }
  }
}
