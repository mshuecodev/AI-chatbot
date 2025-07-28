import { Request, Response } from "express"
import { chatWithOllama } from "../services/chatbot.service"

export const chatbotController = async (req: Request, res: Response) => {
	const { message } = req.body
	if (!message) {
		return res.status(400).json({ error: "Message is required" })
	}

	try {
		console.log("loading the chat with Ollama...")
		const response = await chatWithOllama(message)
		res.json({ response })
	} catch (error) {
		console.log("Error in chatbotController:", error)
		res.status(500).json({ error: "Failed to get response from Ollama" })
	}
}
