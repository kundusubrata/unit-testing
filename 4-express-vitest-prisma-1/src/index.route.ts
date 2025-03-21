import express from "express";
import { index } from "./index.controller";

const router = express.Router();

router.route("/add").post(index);

export default router;