import { Router } from "express"
import { helloWorld } from "../controllers/index.controller"
import { chatbotController } from "../controllers/chatbot.controller"

const router = Router()

router.get("/", helloWorld)
router.post("/chat", chatbotController)

export default router
