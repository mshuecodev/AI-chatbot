import axios from "axios"

export async function chatWithOllama(message: string): Promise<string> {
	const response = await axios.post(
		"http://localhost:11434/api/generate",
		{
			model: "llama3", // or your preferred model
			prompt: message,
			stream: false
		}
		// { timeout: 30000 }
	) // 30 seconds timeout)
	return response.data.response
}
