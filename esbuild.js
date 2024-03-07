const { buildSync } = require('esbuild')

buildSync({
	entryPoints: ['src/index.ts'],
	platform: 'node',
	bundle: true,
	sourcemap: true,
	outdir: '.build'
})
