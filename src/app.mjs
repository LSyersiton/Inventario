import express from 'express'
import path from 'path'
import { IndexRouter } from './routes/indexRouter.mjs'
import { agregarRouter } from './routes/agregarRouter.mjs'

const app = express()
const routerTemp = new IndexRouter().inicio()
// eslint-disable-next-line new-cap
const agregar = new agregarRouter().inicio()
// Configurar EJS
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

// Servir archivos estáticos correctamente
app.use(express.static(path.join(process.cwd(), 'public')))

app.use('/', routerTemp)
app.use('/agregar', agregar)

app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000')
})
