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
          'ip-200': '#c4c4cc',
          'ip-300': '#313234',
          'ip-800': '#202024',
          'ip-900': '#121214',
        },
        green:{
          'ip-300':'#00b37e',
          'ip-500': '#00875f',
        },
      },
      boxShadow: {
        'ip': 'inset 0 0 20px #00b37e',
      }
    },
  },
  plugins: [],
}
export default config
