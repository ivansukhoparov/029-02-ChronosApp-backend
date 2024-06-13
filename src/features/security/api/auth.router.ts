import {Router,Request, Response} from "express";
import {serverResponse} from "../../../testData";


export const authRouter=Router()

authRouter.post("/login",async  (req: Request, res: Response)=>{
    const {loginOrEmail, password}=req.body
    console.log(req.body)
console.log(loginOrEmail, password)
    if (loginOrEmail==="qwe"&&password==="asd"){
        res.json({accessToken:"valid-access-token"})
    }else{
        res.json([{field: "login or password", message: "wrong"}])
    }
})