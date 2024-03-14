import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        Oswald: ['Oswald', 'Georgia', 'serif'],
      },
      colors: {
        black: '#000',
        white: '#FFF',

        gray100: '#E1E1E6',
        gray200: '#A9A9B2',
        gray400: '#7C7C8A',
        gray500: '#505059',
        gray600: '#323238',
        gray700: '#29292E',
        gray800: '#202024',
        gray900: '#121214',

        background: '#F2F2F2',
        foreground: '#0D0D0D',

        card: '#F0F0F0',
        'card-foreground': '0D0D0D',

        primary: '#F79513',
        'primary-foreground': '#FAFAFA',

        secondary: '#EBEBEB',
        'secondary-foreground': '#0D0D0D',

        muted: '#E8E8E8',
        'muted-foreground': '#938F83',

        accent: '#E8E8E8',
        'accent-foreground': '#0D0D0D',

        destructive: '#FF4800',
        'destructive-foreground': '#FAFAFA',

        border: '#DFDAD6',
        input: '#DAD5D1',
        ring: '#AA8541',

        'carmine-pink': '#EF4B3C',
        'ultramarine-blue': '#FFD33E',
        'bright-yellow': '#F5A926',
        'tart-orange': '#FF4646',
        'light-cobalt-blue': '#8EB1E5',
        milk: '#FFFBF5',
        'infra-red': '#C5043F',
        'celtic-blue': '#1F6EC0',
        'june-bud-green': '#B1E054',
      },
    },
  },
  plugins: [],
}
export default config
