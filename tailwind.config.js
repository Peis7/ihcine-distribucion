/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        screens: {
            xs: '320px',
            s: '414px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            'tablet-landscape': '1024px',
            'tablet-portrait': { raw: '(orientation: portrait) and (min-width: 640px)' },
            'phone-landscape': { raw: '(orientation: landscape) and (min-width: 320px)' },
            'desktop-ultra': '1920px',
          },
          fontFamily: {
            sans: ['Montserrat', 'sans-serif'], 
          },
          colors: {
            icblue: '#3ab3bf',
            darkgray: '#333333',
            cgreen: '#009E41',
            clgray: '#4A4A4A',
            clightgray: '#EEEEEE',
            clpurple: '#3B4197',
            lightblue: '#add8e6', 
            lightcoral: '#f08080', 
            lightcyan: '#e0ffff', 
            lightgoldenrodyellow: '#fafad2', 
            lightgreen: '#90ee90',
            lightpink: '#ffb6c1', 
            lightsalmon: '#ffa07a', 
            lightseagreen: '#20b2aa', 
            lightskyblue: '#87cefa', 
            lightsteelblue: '#b0c4de',
            darkblue: '#003366',  
            crimson: '#dc143c',   
            olive: '#808000',     
            darkorange: '#ff8c00', 
            gold: '#ffd700',    
            mediumvioletred: '#c71585', 
        },
      },
    },
    plugins: [],
  }
  