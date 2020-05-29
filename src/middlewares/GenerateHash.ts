import bcrypt from "bcrypt"
import { Request, Response, NextFunction } from "express"

export default function GenerateHash(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const password = req.body.password_hash

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) res.sendStatus(500)

    req.body.password_hash = hash

    next()
  })
}
