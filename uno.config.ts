// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'bg-base': 'bg-white dark:bg-dark-100' },
    { 'icon-base': 'bg-dark-100 text-gray-300 dark:bg-white dark:text-gray-900' },
    { 'border-base': 'border-gray-200 dark:border-dark-200' },
    { 'color-base': 'text-gray-900 dark:text-gray-300' },
    { 'color-fade': 'text-gray-900:50 dark:text-gray-300:50' },
    { 'full-page': 'h-screen p-t-36 text-3xl' },
    [/^full-page-(.*)$/, ([, c]) => `bg-${c} text-${c}-100 w-full h-screen`],
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ],
  theme: {
    animation: {
      keyframes: {
        twinkling: `{
          0%, 49%, 100% { visibility: visible; }
          60%, 99% { visibility: hidden; }
        }`,
      },
      durations: {
        twinkling: '2s',
      },
      counts: {
        twinkling: 'infinite',
      },
    },
    backgroundImage: {
      hero: 'url(src/assets/computer.svg)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Nunito', 'Roboto'],
        alfaslabone: [{
          name: 'Alfa Slab One',
        }],
      },
    }),
  ],
})
