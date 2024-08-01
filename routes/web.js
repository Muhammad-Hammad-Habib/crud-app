import express from "express";
const router = express.Router();
import control from "../controllers/stdControl.js";

router.get("/", control.getAllData);

export default router;
