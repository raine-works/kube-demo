import { buildSync } from 'esbuild'

buildSync({
	entryPoints: ['src/index.ts', 'src/utils/worker.util.ts', 'src/utils/jobs.util.ts'],
	outdir: '.build'
})
