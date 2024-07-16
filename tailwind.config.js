/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,}'],
  theme: {
    creens: {
      sm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    darkMode: 'selector',

    extend: {
      colors() {
        return {
          primary: {
            DEFAULT: 'hsl(263, 55%, 52%)',
            dark: 'hsl(217, 19%, 35%)',
          },
        };
      },
    },
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
