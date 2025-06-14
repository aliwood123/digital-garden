import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Flattened brand colors only
        'brand-blue-50': '#e0effa',
        'brand-blue-100': '#b3d6ec',
        'brand-blue-200': '#8abfe0',
        'brand-blue-300': '#5fa7d3',
        'brand-blue-400': '#3d93c7',
        'brand-blue-500': '#1a7ebb',
        'brand-blue-600': '#15689a',
        'brand-blue-700': '#105179',
        'brand-blue-800': '#0a3b58',
        'brand-blue-900': '#052438',
        'brand-peach-50': '#fff2db',
        'brand-peach-100': '#ffe0b2',
        'brand-peach-200': '#ffd180',
        'brand-peach-300': '#ffc04d',
        'brand-peach-400': '#ffb01a',
        'brand-peach-500': '#ffb86b',
        'brand-peach-600': '#cc924e',
        'brand-peach-700': '#996d38',
        'brand-peach-800': '#664823',
        'brand-peach-900': '#332411',
        'brand-green-50': '#e6f4df',
        'brand-green-100': '#c2e6b3',
        'brand-green-200': '#9fd885',
        'brand-green-300': '#7cca57',
        'brand-green-400': '#5ebd2e',
        'brand-green-500': '#bada9d',
        'brand-green-600': '#8fae7a',
        'brand-green-700': '#647257',
        'brand-green-800': '#393634',
        'brand-green-900': '#1d1b1a',
      },
      spacing: require('./src/styles/tokens').tokens.spacing,
      fontFamily: {
        'hey-eloise': ['hey-eloise', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: require('./src/styles/tokens').tokens.typography.fontSize,
      fontWeight: require('./src/styles/tokens').tokens.typography.fontWeight,
      transitionDuration: require('./src/styles/tokens').tokens.animation.duration,
      transitionTimingFunction: require('./src/styles/tokens').tokens.animation.easing,
      screens: require('./src/styles/tokens').tokens.breakpoints,
    },
  },
  plugins: [],
};

export default config; 