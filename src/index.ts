import express, { Application } from 'express'
import cors from 'cors'
import { work } from './utils/work.util'

const PORT = process.env.PORT || 8080

const app: Application = express()

app.use(express.json())
app.use(cors({ origin: '*' }))

app.get('/work', async (req, res, next) => {
	try {
		console.log(req.path)
		work(5000)
		return res.status(200).json({ message: 'Working...' })
	} catch (err) {
		return next(err)
	}
})

// Catch all
app.use((_req, res) => {
	return res.status(404).json({ error: 'Resource not found...' })
})

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`)
})
