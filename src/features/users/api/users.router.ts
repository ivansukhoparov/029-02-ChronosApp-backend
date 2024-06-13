import {Router,Request, Response} from "express";
import {serverResponse} from "../../../testData";
import {container} from "../../../app/composition.root";
import {UsersController} from "../../../../dist/features/users/api/users.controller";


export const usersRouter=Router()
// const userController:UsersController = container.bind(UsersController)
const userController:UsersController = container.resolve<UsersController>(UsersController)

usersRouter.get("/",async  (req: Request, res: Response)=>{
res.json(serverResponse)
})
