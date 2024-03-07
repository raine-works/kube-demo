import { parentPort } from 'worker_threads'

parentPort?.on('message', (jobs) => {
	const tick = performance.now()
	for (let job of jobs) {
		let count = 0
		for (let i = 0; i < job; i++) {
			count++
		}
	}
	const tock = performance.now()
	parentPort?.postMessage({ tick, tock })
})
