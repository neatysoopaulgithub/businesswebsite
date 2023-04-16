/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#4B6BFB",
        
"secondary": "#7B92B2",
        
"accent": "#67CBA0",
        
"neutral": "#181A2A",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}


//theme: {
//  extend: {
//    backgroundImage: {
//      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//      'gradient-conic':
//        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//    },
//  },
//},