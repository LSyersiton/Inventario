import { Conexion } from '../config/MySQL/conexion.mjs'

export class DepartamentoModel {
  constructor () {
    this.conn = new Conexion().init()
  }

  async obtenerTodos () {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM departamento')
    return rows
  }

  async obtenerPorId (id) {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM departamento WHERE id_departamento = ?', [id])
    return rows[0]
  }

  async agregar (departamento) {
    const conn = await this.conn
    const [result] = await conn.query('INSERT INTO departamento (nombre, id_pais) VALUES (?, ?)', [departamento.nombre, departamento.id_pais])
    return result.insertId
  }

  async actualizar (id, departamento) {
    const conn = await this.conn
    const [result] = await conn.query('UPDATE departamento SET nombre = ?, id_pais = ? WHERE id_departamento = ?', [departamento.nombre, departamento.id_pais, id])
    return result.affectedRows
  }

  async eliminar (id) {
    const conn = await this.conn
    const [result] = await conn.query('DELETE FROM departamento WHERE id_departamento = ?', [id])
    return result.affectedRows
  }
}
