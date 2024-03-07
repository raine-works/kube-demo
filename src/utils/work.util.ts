export const work = async (milliseconds: number) => {
	const startTime = Date.now()
	while (true) {
		if (Date.now() - startTime >= milliseconds) {
			break
		}
		// Perform some meaningless computation to consume CPU cycles
		let sum = 0
		for (let i = 0; i < 1000000; i++) {
			sum += Math.random()
		}
	}
}
