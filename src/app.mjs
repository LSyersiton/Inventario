import express from 'express'
import path from 'path'
import { RouterTemp } from './routes/router_temp.mjs'

const app = express()
const routerTemp = new RouterTemp().inicio()

// Configurar EJS
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

// Servir archivos estáticos correctamente
app.use(express.static(path.join(process.cwd(), 'public')))

app.use('/', routerTemp)

app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000')
})
