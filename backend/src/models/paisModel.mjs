import { Conexion } from '../config/MySQL/conexion.mjs'

export class PaisModel {
  constructor () {
    this.conn = new Conexion().init()
  }

  async obtenerTodos () {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM pais')
    return rows
  }

  async obtenerPorId (id) {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM pais WHERE id_pais = ?', [id])
    return rows[0]
  }

  async agregar (pais) {
    const conn = await this.conn
    const [result] = await conn.query('INSERT INTO pais (nombre) VALUES (?)', [pais])
    return result.insertId
  }

  async actualizar (id, pais) {
    const conn = await this.conn
    const [result] = await conn.query('UPDATE pais SET nombre = ? WHERE id_pais = ?', [pais, id])
    return result.affectedRows
  }

  async eliminar (id) {
    const conn = await this.conn
    const [result] = await conn.query('DELETE FROM pais WHERE id_pais = ?', [id])
    return result.affectedRows
  }

  async obtenerPorNombre (nombre) {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM pais WHERE nombre = ?', [nombre])
    return rows[0]
  }
}
