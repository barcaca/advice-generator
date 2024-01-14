import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-manrope)',
      },
      boxShadow: {
        '3xl': '0px 0px 20px 2px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
