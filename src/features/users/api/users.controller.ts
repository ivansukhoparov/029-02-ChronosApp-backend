import {inject, injectable} from "inversify";
import {Request, Response} from "express";

import {RequestWithBody} from "../../../base/types/request";
import {UserInputModel} from "./models/user.input.model";
import {UserIdType} from "../types/output";
import {InterlayerNotice} from "../../../base/interlayer.notice";
import {ErrorsHandler} from "../../../base/errors.handler";
import {CreateUserCommand} from "../use.cases/create.user.use.case";
import {UserService} from "../application/user.service";


@injectable()
export class UsersController {
    constructor(
        @inject(CreateUserCommand) protected readonly createUserCommand: CreateUserCommand,
        @inject(UserService) protected readonly userService: UserService) {
console.log(" UsersController ", this.userService)    }

    async getById(req: Request, res: Response) {
        //  res.json(serverResponse)
    }

    async getAll(req: Request, res: Response) {
        //  res.json(serverResponse)
    }

    async create(req: RequestWithBody<UserInputModel>, res: Response) {
        console.log(this.userService)
        const inputModel = new UserInputModel(req.body)
        const newUserId: UserIdType = await this.userService.create(inputModel)
        res.status(201).json(newUserId)

    }

    async update(req: Request, res: Response) {
        //   res.json(serverResponse)
    }

    async delete(req: Request, res: Response) {
        //  res.json(serverResponse)
    }

}