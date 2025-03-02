
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'safari-black': "#242017",
        "safari-brown": "#d1b277",
        "safari-gray": "#7c7c74",
        "safari-deep-brown": "#603b13",
        "darker-blue": "#194A7C",
        "yellow-shade": '#F8C100',
        "white-400": "rgba(255, 255, 255, 0.80)",
        "platinum": '#DEE2E6',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('/hero.jpg')",
        'kitchen': "url('/kitchen-closet.jpg')",
        'jumbo': "url('/jumbo.png')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px",
        "extra-wide": "1900px",
      }
    },
  },
  plugins: [
  ],
}