import "reflect-metadata";
import {Container} from "inversify";
import {App} from "./app";
import {DBService} from "./app.data.source";
import {UsersRepository} from "../features/users/infrastructure/users.repository";
// Repository

// Services

// Controllers

export const container = new Container();

// App
const root:Array<any> = [
    App,
    DBService,
]

// Repository
const repositories:Array<any> = [
    UsersRepository
]

// Services

// Controllers



export const providers = [...root, ...repositories]



export const compositionRootInit = (providers: Array<any>) => {
for (const provider of providers) {
    container.bind(provider).toSelf()
}
}




