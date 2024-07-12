/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,}'],
  theme: {
    creens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    darkMode: 'selector',

    extend: {},
  },
  plugins: [],
  preflight: {
    /* Опции сброса стандартных стилей браузера */
    html: {
      fontSize: '100%',
      fontFamily: 'inherit',
      lineHeight: 'normal',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      WebkitTextSizeAdjust: '100%',
      MozTabSize: 'unset',
      OTabSize: 'unset',
      tabSize: 'unset',
      WebkitTapHighlightColor: 'transparent',
    },
    body: {
      margin: '0',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
    },
    '*, ::before, ::after': {
      boxSizing: 'border-box',
    },
  },
};
