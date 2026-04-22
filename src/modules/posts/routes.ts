import { Router } from "express";
import { requireAuth } from "../../middlewares/requireAuth";
import { uploadImage } from "../../middlewares/uploadImage";
import { create, get, latest, list, remove, update } from "../posts/controller";

const router = Router();

router.get("/", list);
router.get("/latest", latest);
router.get("/:id", get);
router.post("/", requireAuth, uploadImage, create);
router.delete("/:id", requireAuth, remove);
router.put("/:id", requireAuth, uploadImage, update);

export default router;
