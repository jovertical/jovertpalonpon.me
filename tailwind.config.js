module.exports = {
  prefix: 'tw-',
  theme: {
    linearGradients: {
      colors: {
        'blue-darker-blue': ['#2b6cb0', '#4299e1'],
      }
    },
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
      colors: {
        blue: '#4299e1',
        'blue-lighter': '#63b3ed',
        'blue-darker': '#2b6cb0'
      },
      inset: {
        '1/2': '50%',
      },
      spacing: {
        '2px': '2px',
        '16:9': '56.25%',
        '11:8': '72.73%',
      }
    }
  },
  variants: {
    backgroundImage: ['hover'],
    backgroundColor: ['hover'],
    borderWidth: ['responsive', 'hover'],
    display: ['responsive', 'hover', 'focus']
  },
  plugins: [
    require('tailwindcss-gradients')(),
    require('tailwindcss-transforms')(),
    require('tailwindcss-transitions')(),
  ]
}
