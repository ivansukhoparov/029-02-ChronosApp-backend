import {Router, Request, Response} from "express";
import {serverResponse} from "../../../testData";
import {UsersController} from "./users.controller";
import {App} from "../../../app/app";

import {container} from "../../../app/composition.root";
import {inject, injectable} from "inversify";

@injectable()
export class UsersRouter {
    router: Router= Router()

    constructor(@inject(UsersController) protected readonly usersController:UsersController ) {
        console.log("UsersRouter ", this.usersController)
    }

    init() {
        this.router.post("/", this.usersController.create.bind(UsersController))
        return this.router
    }

}
