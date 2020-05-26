import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/', (req, res) => res.send('Página inicial'))

export default routes
