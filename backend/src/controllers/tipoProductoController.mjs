import { TipoProductoModel } from '../models/tipoProductoModel.mjs'

export class TipoProductoController {
  constructor () {
    this.tipoProductoModel = new TipoProductoModel()
  }

  async listarDatos (req, res) {
    try {
      const datosTipoProducto = await this.tipoProductoModel.obtenerTodos()
      res.render('agregar_tipo_producto', {
        datosTipoProducto
      })
    } catch (error) {
      console.error('Error al cargar datos del formulario:', error)
      res.status(500).json({ error: error.message })
    }
  }

  async agregar (req, res) {
    try {
      const { tipoProducto } = req.body
      await this.tipoProductoModel.agregar(tipoProducto)
    } catch (error) {
      console.error('Error al agregar tipo de producto:', error)
      res.status(500).json({ error: error.message })
    }
  }

  async eliminar (req, res) {
    const { id } = req.params
    const resultado = await this.tipoProductoModel.eliminar(id)
    res.json({ resultado })
  }

  async actualizar (req, res) {
    try {
      const { id } = req.params
      const { tipoProducto } = req.body
      const resultado = await this.tipoProductoModel.actualizar(id, tipoProducto)
      res.json({ resultado })
    } catch (error) {
      console.error('Error al actualizar tipo de producto:', error)
      res.status(500).json({ error: error.message })
    }
  }
}
