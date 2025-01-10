import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  			open: ["var(--font-open-regular)", "sans-serif"],
  			'open-medium': ["var(--font-open-medium)", "sans-serif"],
  			'open-semibold': ["var(--font-open-semibold)", "sans-serif"],
  			'open-bold': ["var(--font-open-bold)", "sans-serif"]
  		},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'auth': "url('/auth.png')",
        'auth-mob': "url('/auth-mobile.png')",
        },
        screens: {
          'xs': '480px',

          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1400px',
          // => @media (min-width: 1536px) { ... }
        }
    },
  },
  plugins: [],
} satisfies Config;
