import {Router,Request, Response} from "express";
import {serverResponse} from "../../../testData";


export const tasksRouter=Router()

tasksRouter.get("/",async  (req: Request, res: Response)=>{
res.json(serverResponse)
})