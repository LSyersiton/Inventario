import express from 'express'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { IndexRouter } from './routes/indexRouter.mjs'
import { AgregarProductoRouter } from './routes/agregarProductoRouter.mjs'
import { AgregarSucursalesRouter } from './routes/agregarSucursalesRouter.mjs'
import { AgregarTipoProductoRouter } from './routes/agregarTipo_productoRouter.mjs'
import { AgregarMarcasRouter } from './routes/agregarMarcasRouter.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000
const routerTemp = new IndexRouter().inicio()
const agregarProducto = new AgregarProductoRouter().inicio()
const agregarSucursales = new AgregarSucursalesRouter().inicio()
const agregarTipoProducto = new AgregarTipoProductoRouter().inicio()
const agregarMarcas = new AgregarMarcasRouter().inicio()

// Servir archivos estáticos correctamente
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routerTemp)
app.use('/agregar_producto', agregarProducto)
app.use('/agregar_sucursales', agregarSucursales)
app.use('/agregarTipo_producto', agregarTipoProducto)
app.use('/agregar_marcas', agregarMarcas)

// Iniciar el servidor

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`)
})
