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
      res.json({
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
      res.json(productos)
    } catch (error) {
      console.error('Error al listar los datos:', error)
      res.status(500).send('Error al listar los datos')
    }
  }

  async listarDatos (req, res) {
    try {
      const productos = await this.productosModel.obtenerTodos()
      res.render('actualizar_producto', {
        productos
      })
    } catch (error) {
      console.error('Error al listar los datos:', error)
      res.status(500).send('Error al listar los datos')
    }
  }

  async listarDatosProductosId (req, res) {
    try {
      const { id } = req.params
      const producto = await this.productosModel.obtenerPorId(id)
      res.json(producto)
    } catch (error) {
      console.error('Error al listar los datos del producto:', error)
      res.status(500).send('Error al listar los datos del producto')
    }
  }

  async agregar (req, res) {
    try {
      console.log('CWD:', process.cwd())
      console.log('Agregar producto request body:', req.body)
      console.log('Agregar producto request file:', req.file)
      const { nombre, precio, stock, idMarca, idTipoProducto, descripcion } = req.body
      const imagen = req.file ? req.file.filename : null
      await this.productosModel.agregarProducto(nombre, descripcion, precio, stock, imagen, idTipoProducto, idMarca)
      res.json({
        ok: true,
        message: 'Producto agregado correctamente'
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        ok: false,
        error: error.message,
        stack: error.stack
      })
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

  async actualizar (req, res) {
    try {
      const { id } = req.params
      const { nombre, precio, stock, idMarca, idTipoProducto, descripcion } = req.body
      const imagen = req.file ? req.file.filename : null
      await this.productosModel.actualizarProducto(id, nombre, descripcion, precio, stock, imagen, idTipoProducto, idMarca)
      res.redirect('/agregar') // Redirige a la página de agregar productos después de actualizar uno
    } catch (error) {
      console.error('Error al actualizar el producto:', error)
      res.status(500).send('Error al actualizar el producto')
    }
  }
}
