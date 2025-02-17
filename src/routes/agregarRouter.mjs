import { Router } from 'express'

export class agregarRouter {
  inicio () {
    const router = Router()

    router.get('/', (req, res) => {
      res.render('agregar') // Asegúrate de que existe "views/agregar.ejs"
    })

    return router
  }
}
