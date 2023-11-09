import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        gray:{
          'ip-100': '#e1e1e6',
          'ip-300': '#c4c4cc',
          'ip-800': '#202024',
          'ip-900': '#121214'
        },
        green:{
          'ip-300':'#00b37e',
          'ip-500': '#00875f',
        }
      },
    },
  },
  plugins: [],
}
export default config
