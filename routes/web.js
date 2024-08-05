import express from "express";
const router = express.Router();
import control from "../controllers/stdControl.js";

router.get("/", control.getAllData);
router.post("/", control.insertRecord);
router.get("/edit/:_id", control.getRecordForUpdate);
router.post("/edit/:id", control.updateRecord);
router.post("/delete/:id", control.deleteRecord);

export default router;
