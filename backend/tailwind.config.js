/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './**/templates/*/*.html',
      './mysite/templates/*.html',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#333333', // Adjust the dark gray color for the "Log in" button
          700: '#2a2a2e', // Slightly lighter gray for hover states
        },
        dark: {
          900: '#111111', // Adjust for even darker background
        },
        purple: {
          600: '#7c3aed', // Match purple shade from your expected design
          700: '#6b21a8',
        },
      },
      fontFamily: {
        'serif': ['Noto Serif', 'serif'],  // Use Noto Serif as the serif font
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
 }
}
