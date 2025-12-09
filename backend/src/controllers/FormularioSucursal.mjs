import { Sucursales } from '../models/sucursalesModel.mjs'
import { CiudadModel } from '../models/ciudadModel.mjs'
import { DepartamentoModel } from '../models/departamentoModel.mjs'
import { PaisModel } from '../models/paisModel.mjs'

export class FormularioSucursal {
  constructor () {
    this.sucursales = new Sucursales()
    this.CiudadModel = new CiudadModel()
    this.DepartamentoModel = new DepartamentoModel()
    this.PaisModel = new PaisModel()
  }

  async listarDatos (req, res) {
    try {
      const datosCiudad = await this.CiudadModel.obtenerTodos()
      const datosDepartamento = await this.DepartamentoModel.obtenerTodos()
      const datosPais = await this.PaisModel.obtenerTodos()

      res.json({
        datosCiudad,
        datosDepartamento,
        datosPais
      })
    } catch (error) {
      console.error('Error al cargar datos del formulario:', error)
      res.status(500).json({ error: error.message })
    }
  }

  async agregar (req, res) {
    try {
      const { direccion, idCiudad } = req.body
      await this.sucursales.agregar({ direccion, idCiudad })

      res.json({
        ok: true,
        message: 'Sucursal creada correctamente'
      })
    } catch (error) {
      console.error('Error al agregar sucursal:', error)
      res.status(500).json({ ok: false, error: error.message })
    }
  }

  async eliminar (req, res) {
    const { id } = req.params
    const resultado = await this.sucursales.eliminar(id)
    res.json({ resultado })
  }
}
