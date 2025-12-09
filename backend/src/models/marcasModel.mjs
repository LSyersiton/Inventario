import { Conexion } from '../config/MySQL/conexion.mjs'

export class MarcasModel {
  constructor () {
    this.conn = new Conexion().init()
  }

  async obtenerTodos () {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM marcas')
    return rows
  }

  async obtenerPorId (id) {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM marcas WHERE id_marcas = ?', [id])
    return rows[0]
  }

  async agregar (marca) {
    const conn = await this.conn
    const [result] = await conn.query('INSERT INTO marcas (nombres) VALUES (?)', [marca])
    return result.insertId
  }

  async actualizar (id, marca) {
    const conn = await this.conn
    const [result] = await conn.query('UPDATE marcas SET nombres = ? WHERE id_marcas = ?', [marca, id])
    return result.affectedRows
  }

  async eliminar (id) {
    const conn = await this.conn
    const [result] = await conn.query('DELETE FROM marcas WHERE id_marcas = ?', [id])
    return result.affectedRows
  }
}
