import { Conexion } from '../config/MySQL/conexion.mjs'

export class TipoProductoModel {
  constructor () {
    this.conn = new Conexion().init()
  }

  async obtenerTodos () {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM tipos_producto')
    return rows
  }

  async obtenerPorId (id) {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM tipos_producto WHERE id_tipo_producto = ?', [id])
    return rows[0]
  }

  async agregar (tipoProducto) {
    const conn = await this.conn
    const [result] = await conn.query('INSERT INTO tipos_producto (nombre) VALUES (?)', [tipoProducto])
    return result.insertId
  }

  async actualizar (id, tipoProducto) {
    const conn = await this.conn
    const [result] = await conn.query('UPDATE tipos_producto SET nombre = ? WHERE id_tipo_producto = ?', [tipoProducto, id])
    return result.affectedRows
  }

  async eliminar (id) {
    const conn = await this.conn
    const [result] = await conn.query('DELETE FROM tipos_producto WHERE id_tipo_producto = ?', [id])
    return result.affectedRows
  }
}
