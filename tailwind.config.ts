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
          100: '#e1e1e6',
          300: '#c4c4cc',
          800: '#202024',
          900: '#121214'
        },
        green:{
          300:'#00b37e',
          500: '#00b37e',
        }
      },
    },
  },
  plugins: [],
}
export default config
