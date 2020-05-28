import express from 'express'
import cors from 'cors'
import { createConnection } from 'typeorm'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    createConnection()
  }

  private routes (): void {
    this.express.get('/', (req, res) => res.json({ Hello: 'World' }))
  }
}

export default new App().express
