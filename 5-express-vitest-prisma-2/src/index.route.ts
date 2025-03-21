import express from "express";
import { multiIndex, sumIndex } from "./index.controller";

const router = express.Router();

router.route("/add").post(sumIndex);
router.route("/multi").post(multiIndex);

export default router;