const autoprefixer = require('autoprefixer');

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
      typography: {
        DEFAULT: {
          css: {
            a: {
              fontWeight: '500',
              color: '#0000f7',
              letterSpacing: '-.025em',
              textDecoration: 'none',
            },
            img: {
              width: '100%',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
              margin: '0 auto;'
            },
            blockquote: {
              fontWeight: '400',
              color: '#333333',
              borderLeft: '0px',
              backgroundColor: 'rgba(249,250,251,1.0)',
              borderRadius: '0.5rem',
            },
          },
        },
        lg: {
          css: {
            blockquote: {
              padding: '2.5rem',
            },
          },
        },
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
