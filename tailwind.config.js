/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'],
    mode:'jit',
    darkMode:false,
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins:{
    //preflight:false
  }
}

