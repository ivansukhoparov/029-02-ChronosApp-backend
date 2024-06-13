import express, {Express, NextFunction, Request, Response} from "express"
import {tasksRouter} from "../features/tasks/api/tasks.router";
import {authRouter} from "../features/security/api/auth.router";
import { DBService} from "./app.data.source";
import {inject, injectable} from "inversify";

@injectable()
export class App {
    protected readonly app: Express

    constructor(@inject(DBService) protected readonly dbService:DBService) {
        this.app = express()
        this.init()
    }

    async start(port: number) {
        //
        await this.dbService.initialize()
        this.app.listen(port, async () => {
            console.log(`app start on port ${port}`);
            console.log(`open in browser http://localhost:${port}`);
        })
    }

    init() {
        this.initGlobalMiddlewares()
        this.initRouters()
    }

    private initRouters() {
        this.app.use("/tasks", tasksRouter)
        this.app.use("/auth", authRouter)
    }

    private initGlobalMiddlewares() {
        this.app.use(express.json());
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res
                .setHeader('Access-Control-Allow-Origin', '*')
                .setHeader('Access-Control-Request-Method', '*')
                .setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET,POST,PUT,DELETE')
                .setHeader('Access-Control-Allow-Headers', '*')
            next()
        })
    }

}

// console.log("App started at " + (new Date()).toString());
// const dbConnection = await connectDb();
// if (dbConnection) {
//     app.listen(settings.env.port, async () => {
//         console.log(`app start on port ${settings.env.port}`);
//         console.log(`open in browser http://localhost:${settings.env.port}`);
//     });
// } else {
//     console.log("Data base connection failed at " + (new Date()).toString());
//     console.log("App will try restart in 10 seconds");
//     await new Promise(resolve => setTimeout(resolve, 10000));
//     appStart();
// }
// };