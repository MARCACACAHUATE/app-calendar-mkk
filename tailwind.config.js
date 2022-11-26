/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/renderer/index.html",
    "./packages/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        spacing: {
            '128': '32rem',
        }
    },
    fontFamily: {
        'nerd': ['CaskaydiaCove NF Mono', 'JetBrainsMono Nerd Font'],
    }
  },
  plugins: [],
}
