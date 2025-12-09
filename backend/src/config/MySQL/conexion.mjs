import mysql from 'mysql2/promise'

export class Conexion {
  async init () {
    try {
      this.conexion = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '5432SE#@Z',
        database: process.env.DB_NAME || 'inventario'
      })
      return this.conexion
    } catch (error) {
      console.error('❌ Error en la conexión a la base de datos:', error.message)
      throw error
    }
  }
}
