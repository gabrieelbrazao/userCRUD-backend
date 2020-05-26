import { Request, Response } from 'express'

const users = [
  { name: 'diego', email: 'diego@rocketseat.com.br' },
  { name: 'gabriel', email: 'gabrieelbrazao@gmail.com' },
  { name: 'alisson', email: 'alisson@hotmail.com' }
]

export default {
  index (req: Request, res: Response): Response {
    return res.json(users)
  }
}
