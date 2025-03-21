import express from "express";
import indexRoutes from "./index.route";

export const app = express();
app.use(express.json());


app.use("",indexRoutes)
