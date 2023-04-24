// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
	shortcuts:[
		{'bg-base': 'bg-white dark:bg-dark-100'},
		{'border-base': 'border-gray-200 dark:border-dark-200'},
		{'color-base': 'text-gray-900 dark:text-gray-300'},
		{'color-fade': 'text-gray-900:50 dark:text-gray-300:50'},
		{'full-page': 'h-screen  flex items-center justify-center text-3xl'},
		[/^full-page-(.*)$/, ([, c]) => `bg-${c} text-${c}-100 w-full h-screen`],
		[/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`]
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			extraProperties:{
				'display': 'inline-block',
				'vertical-align': 'middle',
			}
		})
	],
})
