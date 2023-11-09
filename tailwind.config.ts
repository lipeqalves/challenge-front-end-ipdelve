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
          'rm-100': '#e1e1e6',
          'rm-200': '#c4c4cc',
          'rm-300': '#313234',
          'rm-800': '#202024',
          'rm-900': '#121214',
        },
        green:{
          'rm-300':'#00b37e',
          'rm-500': '#00875f',
        },
      },
      boxShadow: {
        'rm': 'inset 0 0 20px #00b37e',
      }
    },
  },
  plugins: [],
}
export default config
