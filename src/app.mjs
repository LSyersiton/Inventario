import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { IndexRouter } from './routes/indexRouter.mjs'
import { AgregarProductoRouter } from './routes/agregarProductoRouter.mjs'
import { AgregarSucursalesRouter } from './routes/agregarSucursalesRouter.mjs'
import { AgregarTipoProductoRouter } from './routes/agregarTipo_productoRouter.mjs'
import { AgregarMarcasRouter } from './routes/agregarMarcasRouter.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const routerTemp = new IndexRouter().inicio()
const agregarProducto = new AgregarProductoRouter().inicio()
const agregarSucursales = new AgregarSucursalesRouter().inicio()
const agregarTipoProducto = new AgregarTipoProductoRouter().inicio()
const agregarMarcas = new AgregarMarcasRouter().inicio()

// Configurar EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Servir archivos estáticos correctamente
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use('/', routerTemp)
app.use('/agregar', agregarProducto)
app.use('/agregar_sucursales', agregarSucursales)
app.use('/agregarTipo_producto', agregarTipoProducto)
app.use('/agregar_marcas', agregarMarcas)

// Iniciar el servidor

app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000')
})
