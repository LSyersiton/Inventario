import { Conexion } from '../config/MySQL/conexion.mjs'

export class ProductosModel {
  constructor () {
    this.conn = new Conexion().init()
  }

  async obtenerTodos () {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM productos')
    return rows
  }

  async obtenerPorId (id) {
    const conn = await this.conn
    const [rows] = await conn.query('SELECT * FROM productos WHERE id_producto = ?', [id])
    return rows[0]
  }

  async agregarProducto (nombre, descripcion, precio, stock, imagen, idTipoProducto, idMarca) {
    const conn = await this.conn
    const [result] = await conn.query(
      'INSERT INTO productos (nombre, descripcion, precio, stock, imagen, id_tipo, id_marcas) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nombre, descripcion, precio, stock, imagen, idTipoProducto, idMarca]
    )
    return result.insertId
  }

  async eliminarProducto (id) {
    const conn = await this.conn
    const [result] = await conn.query('DELETE FROM productos WHERE id_producto = ?', [id])
    return result.affectedRows
  }

  async actualizarProducto (id, nombre, descripcion, precio, stock, imagen, idTipoProducto, idMarca) {
    const conn = await this.conn
    const [result] = await conn.query(
      'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, imagen = ?, id_tipo = ?, id_marcas = ? WHERE id_producto = ?',
      [nombre, descripcion, precio, stock, imagen, idTipoProducto, idMarca, id]
    )
    return result.affectedRows
  }
}
