import { Conexion } from '../config/MySQL/conexion.mjs'

export class Sucursales {
  constructor () {
    this.conn = new Conexion().init()
  }

  async obtenerTodas () {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM sucursales')
    return rows[0]
  }

  async obtenerPorId (id) {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM sucursal WHERE id_sucursal = ?', [id])
    return rows[0]
  }

  async agregar ({ direccion, idCiudad }) {
    console.log('Agregando sucursal:', { direccion, idCiudad })
    const conn = await this.conn
    const sql = 'INSERT INTO sucursal (direccion, id_ciudad) VALUES (?, ?)'
    const [result] = await conn.query(sql, [direccion, idCiudad])
    return result.insertId
  }

  async actualizar (id, sucursal) {
    const conn = await this.conn
    const [result] = await conn.query('UPDATE sucursal SET ? WHERE id_sucursal = ?', [sucursal, id])
    return result.affectedRows
  }

  async eliminar (id) {
    const conn = await this.conn
    const [result] = await conn.query('DELETE FROM sucursales WHERE id_sucursal = ?', [id])
    return result.affectedRows
  }
}
