module.exports = {
  prefix: 'tw-',
  theme: {
    rotate: {
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '3d': ['0', '1', '0.5', '45deg'],
    },
    translate: {
      '1/2': '50%',
      full: '100%',
      '-1/2': '-50%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px'],
    },
    extend: {
      inset: {
        '1/2': '50%',
      },
      spacing: {
        '2px': '2px',
      }
    }
  },
  variants: {
    backgroundImage: ['hover'],
    backgroundColor: ['hover'],
    display: ['responsive', 'hover', 'focus']
  },
  plugins: [
    require('tailwindcss-transforms')(),
    require('tailwindcss-transitions')(),
  ]
}
