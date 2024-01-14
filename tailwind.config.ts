import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-manrope)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
