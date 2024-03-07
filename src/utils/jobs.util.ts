import { resolve } from 'path'
import { Worker } from 'worker_threads'

const chunkify = (array: number[], n: number) => {
	let chunks = []
	for (let i = n; i > 0; i--) {
		chunks.push(array.splice(0, Math.ceil(array.length / i)))
	}
	return chunks
}

export const runJobs = async (ws: any, jobs: number[], workers: number) => {
	const chunks = chunkify(jobs, workers)
	chunks.forEach((data, i) => {
		const worker = new Worker(resolve('.build/utils/worker.util.js'))
		worker.postMessage(data)
		worker.on('message', ({ tick, tock }) => {
			ws.send(`Thread ${i} executed in ${tock - tick}ms...`)
		})
	})
}
