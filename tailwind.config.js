/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primaryColor': "#1E81C4",
      'primaryColor2': "#0F4062",
      'secondaryColor': "#FFFFFF",
      'textColor': "#1A1A1A",
      'textColor2': "#515151",
      'textColorLight': "#FFFFFF",
      'negativeAlert': '#E43424',
      'positiveAlert': "#40C73D",
    }, 
    fontFamily: {
      Grotesk: ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '3xl': ['-5px -5px 0px 1px #1E81C4']
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, #1e82c48c, #0f3f6291), url('../../src/images/black-man-black-suit-standing-cafe.png')",
      }
    },
  },
  plugins: [],
}

