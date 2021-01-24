module.exports = {
  purge: {
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.md"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bluebird': '#0000f7',
        'bluebird-light': '#00b6ff',
        'dribbble': '#f94898',
        'dribbble-light': '#f694c2',
        'github': '#224065',
        'github-light': '#3d5375',
      },
      container: {
        center: true,
      },
      spacing: {
        '144': '36rem',
      },
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
