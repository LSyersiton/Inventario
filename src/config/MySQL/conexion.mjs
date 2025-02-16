import mysql from 'mysql2/promise'

export class Conexion {
  async init () {
    try {
      this.conexion = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '5432SE#@Z',
        database: 'inventario'
      })
      console.log('✅ Conectado a la base de datos')
    } catch (error) {
      console.error('❌ Error en la conexión a la base de datos:', error.message)
    }
  }
}
