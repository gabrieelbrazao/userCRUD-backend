import { getConnection } from "typeorm"
import { User } from "../database/entity/User"
import { Request, Response } from "express"

export default {
  async create(req: Request, res: Response): Promise<void> {
    const user = req.body

    user.is_active = 1

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute()

    res.sendStatus(200)
  },

  async index(req: Request, res: Response): Promise<void> {
    const users = await getConnection()
      .getRepository(User)
      .createQueryBuilder()
      .getMany()

    res.json(users)
  },

  async delete(req: Request, res: Response): Promise<void> {
    const id = req.params.id

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id })
      .execute()

    res.sendStatus(200)
  },

  async update(req: Request, res: Response): Promise<void> {
    const id = req.params.id
    const data = req.body

    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(data)
      .where("id = :id", { id })
      .execute()

    res.sendStatus(200)
  },

  async search(req: Request, res: Response): Promise<void> {
    const id = req.params.id

    const user = await getConnection()
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .getOne()

    if (!user) res.sendStatus(404)

    res.json(user)
  }
}
