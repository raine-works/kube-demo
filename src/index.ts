import express from 'express'
import expressWs from 'express-ws'
import cors from 'cors'
import { runJobs } from './utils/jobs.util.js'

const PORT = process.env.PORT || 8080

const { app } = expressWs(express())

app.use(express.json())
app.use(cors({ origin: '*' }))

app.ws('/work', (ws, req) => {
	ws.on('message', (msg) => {
		runJobs(
			ws,
			Array.from({ length: 100 }, () => 1e9),
			4
		)
	})
})

// Catch all
app.use((_req, res) => {
	return res.status(404).json({ error: 'Resource not found...' })
})

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`)
})
