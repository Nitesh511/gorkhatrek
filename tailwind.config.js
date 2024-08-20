/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      fontSize: {
        // Adding custom font sizes
        'xs': '.75rem',  // 12px
        'sm': '.875rem', // 14px
        'base': '1rem',  // 16px
        'lg': '1.125rem',// 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',   // 48px
        '6xl': '3.75rem',// 60px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem',   // 96px
        '9xl': '8rem',   // 128px
      },
      animation: {
        'slow-bounce': 'slowBounce 2s infinite ease-in-out', // Adjust the duration here
      },
      keyframes: {
        slowBounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)', // Adjust the height of the bounce here
          },
          '60%': {
            transform: 'translateY(-5px)', // Adjust the height of the bounce here
          },
        },
      },

      
    },
  },
  plugins: [],
}
