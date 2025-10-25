import { Conexion } from '../config/MySQL/conexion.mjs'

export class CiudadModel {
  constructor () {
    this.conn = new Conexion().init()
  }

  async obtenerTodos () {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM ciudad')
    return rows
  }

  async obtenerPorId (id) {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM ciudad WHERE id_ciudad= ?', [id])
    return rows[0]
  }

  async agregar (ciudad) {
    const conn = await this.conn
    const [result] = await conn.query('INSERT INTO ciudad (nombre, id_departamento) VALUES (?, ?)', [ciudad.nombre, ciudad.id_departamento])
    return result.insertId
  }

  async actualizar (id, ciudad) {
    const conn = await this.conn
    const [result] = await conn.query('UPDATE ciudad SET nombre = ?, id_departamento = ? WHERE id_ciudad = ?', [ciudad.nombre, ciudad.id_departamento, id])
    return result.affectedRows
  }

  async eliminar (id) {
    const conn = await this.conn
    const [result] = await conn.query('DELETE FROM ciudad WHERE id_ciudad = ?', [id])
    return result.affectedRows
  }
}
