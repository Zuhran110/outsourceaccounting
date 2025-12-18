import { Router } from "express";

import { dataHandler } from "../controllers/contact.controller.js";
import { contacttwo } from "../controllers/contacttwo.controller.js";

const router = Router();

router.post("/contact", dataHandler);
router.post("/contacttwo", contacttwo);

export default router;
