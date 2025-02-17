import { Router } from 'express'

export class IndexRouter {
  inicio () {
    const router = Router()

    router.get('/', (req, res) => {
      res.render('index') // Asegúrate de que existe "views/agregar.ejs"
    })

    return router
  }
}
