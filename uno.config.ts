// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'bg-base': 'bg-white dark:bg-dark-100' },
    { 'icon-base': 'bg-dark-100 text-gray-300 dark:bg-white dark:text-gray-900' },
    { 'border-base': 'border-gray-200 dark:border-dark-200' },
    { 'color-base': 'text-gray-900 dark:text-gray-300' },
    { 'color-fade': 'text-gray-900:50 dark:text-gray-300:50' },
    { 'full-page': 'h-screen text-3xl flex justify-center min-w-xs relative overflow-hidden' },
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
        rubberband:`{
          0%{
            transform: scaleX(1);
          }
          40%{
              transform: scaleX(1.12) scaleY(0.75);
          }
          55%{
              transform: scaleX(0.85) scaleY(1);
          }
          65%{
              transform: scaleX(1.09) scaleY(0.85);
          }
          75%{
              transform: scaleX(0.9)  scaleY(1);
          }
          90%{
              transform: scaleX(1.05) scaleY(0.95);
          }
          100%{
              transform: scaleX(1) scaleY(1);
          }
        }`
      },
      durations: {
        twinkling: '2s',
        rubberband: '0.8s',
      },
      counts: {
        twinkling: 'infinite',
      },
      timingFns: {
        rubberband: 'ease-in-out',
      }
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
