import os from 'os'

export const work = () => {
	const cpus = os.cpus().length
	const loadPerCore = 0.9 / cpus

	const start = Date.now()
	while (Date.now() - start < 1000) {
		// Perform a computationally intensive task
		for (let i = 0; i < 1000000; i++) {
			Math.sqrt(i)
		}

		// Sleep to control the CPU usage
		const busyTime = loadPerCore * 1000
		const sleepTime = 1000 - busyTime
		const sleepStart = Date.now()
		while (Date.now() - sleepStart < sleepTime) {}
	}
}
