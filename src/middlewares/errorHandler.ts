import { Request, Response, NextFunction } from "express"

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack)
	res.status(500).json({ error: "Something went wrong" })
}

export default errorHandler
