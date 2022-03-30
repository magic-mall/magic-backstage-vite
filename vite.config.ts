import { resolve } from 'path'
import Tov from './presets/tov'
import { defineConfig } from 'vite'
import Base from './src/https/request/config'
export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`
		}
	},
	plugins: [Tov()],
})
