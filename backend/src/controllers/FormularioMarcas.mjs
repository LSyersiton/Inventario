import { MarcasModel } from '../models/marcasModel.mjs'

export class FormularioMarcas {
  constructor () {
    this.marcasModel = new MarcasModel()
  }

  async listarDatos (req, res) {
    try {
      const datosMarcas = await this.marcasModel.obtenerTodos()
      res.render('agregar_marcas', {
        datosMarcas
      })
    } catch (error) {
      console.error('Error al cargar datos del formulario:', error)
      res.status(500).json({ error: error.message })
    }
  }

  async agregar (req, res) {
    try {
      const { marca } = req.body
      await this.marcasModel.agregar(marca)
    } catch (error) {
      console.error('Error al agregar marca:', error)
      res.status(500).json({ error: error.message })
    }
  }

  async eliminar (req, res) {
    const { id } = req.params
    const resultado = await this.marcasModel.eliminar(id)
    res.json({ resultado })
  }
}
