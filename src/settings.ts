import express from "express"
import {listRouter} from "./routers/list-router";

export const app = express()

app.use("/list", listRouter)

