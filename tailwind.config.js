/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: '475px',
      'max-xl': '1600px',
    },
    extend: {
      colors: {
        'z-primary-color': 'var(--z-primary-color)',
        'z-header-footer-bg': 'var(--z-header-footer-bg)',
        'z-gray-light': 'var(--z-gray-light)',
        'z-modal-bg': 'var(--z-modal-bg)',
        'z-gray': 'var(--z-gray)',
        'z-text-color-fixed': 'var(--z-text-color-fixed)',
        'z-text-color': 'var(--z-text-color)',
        'z-card-bg': 'var(--z-card-bg)',
        'z-white': 'var(--z-white)',
        'z-success': 'var(--z-success)',
        'z-success-hover': 'var(--z-success-hover)',
        'z-blue': 'var(--z-blue)',
        'z-sort-filter-bg': 'var(--z-sort-filter-bg)',
        'z-search-filter-bg': 'var(--z-search-filter-bg)',
        'z-gray-hover': 'var(--z-gray-hover)',
        'z-sort-filter-active-bg': 'var(--z-sort-filter-active-bg)',
        'z-sort-filter-hover-bg': 'var(--z-sort-filter-hover-bg)',
        'z-spinner-bg': 'var(--z-spinner-bg)',
      },
    },
  },

  plugins: [require('tailwindcss-rtl'), require('@tailwindcss/line-clamp')],
};
