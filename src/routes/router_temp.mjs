import { Router } from 'express'

export class RouterTemp {
  constructor () {
    this.router = Router()
    this.setupRoutes()
  }

  setupRoutes () {
    this.router.get('/', (req, res) => {
      res.render('index')
    })
  }

  inicio () {
    return this.router
  }
}
