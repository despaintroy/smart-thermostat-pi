import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import dotenv from 'rollup-plugin-dotenv'

export default {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'cjs',
	},
	plugins: [dotenv(), typescript(), commonjs()],
}
