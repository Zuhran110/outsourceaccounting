import { Router } from "express";

import { dataHandler } from "../controllers/contact.controller.js";

const router = Router();

router.post("/", dataHandler);

export default router;
