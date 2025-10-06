/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ede8e1',
          300: '#e4dccf',
          400: '#d9cdb8',
          500: '#ccb89a',
          600: '#b8a085',
          700: '#9a8569',
          800: '#7d6b55',
          900: '#665647',
        },
        ink: {
          900: '#0f172a',
          800: '#1f2937',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
        },
        cream: {
          50: '#f9f7f2',
          100: '#f3efe6',
          200: '#ebe4d6',
        },
        confetti: {
          // Bright, celebratory accents
          pink: '#ff5fa2',
          yellow: '#ffc042',
          blue: '#6bcff6',
          purple: '#b388ff',
          orange: '#ff8a65',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'confetti': 'confetti 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        confetti: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-5px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}

