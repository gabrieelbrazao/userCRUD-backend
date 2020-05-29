import { Router } from "express"
import UserController from "../controllers/UserController"
import GenerateHash from "../middlewares/GenerateHash"

const routes = Router()

routes.get("/", UserController.index)

routes.post("/create", GenerateHash, UserController.create)

routes.delete("/delete/:id", UserController.delete)

routes.put("/update/:id", GenerateHash, UserController.update)

routes.get("/search/:id", UserController.search)

export default routes
