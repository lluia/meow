const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      /**
       * Main
       */
      transparent: 'transparent',
      brand: '#e67e22',
      ['brand-dark']: '#d35400',
      ['brand-light']: '#f1f5fe',
      action: '#382fee',
      ['action-light']: '#793bfc',
      link: '#3498db',
      ['link-light']: '#FAFAFA',
      /**
       * Semantic
       */
      success: '#4CAF50',
      ['success-dark']: '#388E3C',
      ['success-light']: '#A5D6A7',
      error: '#E64A19',
      ['error-dark']: '#BF360C',
      ['error-light']: '#FFAB91',
      warning: '#FBC02D',
      ['warning-dark']: '#F9A825',
      ['warning-light']: '#FFE082',
      /**
       * Gray scale
       */
      black: '#263238',
      dark: '#757575',
      grey: '#BDBDBD',
      ['blue-grey']: '#607D8B',
      ['near-white']: '#EEEEEE',
      white: '#FAFAFA',
      /**
       * Other
       */
      ['aux-purple']: '#AA00FF',
      ['aux-green']: '#00C853',
      ['aux-green-light']: '#64DD17',
      ['aux-blue']: '#0091EA',
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '5': '5px',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    fontFamily: {
      sans: [
        'Lato',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xxs: '0.65rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    corePlugins: {
      backgroundPosition: false,
      backgroundSize: false,
      backgroundOpacity: false,
      gridTemplateColumns: false,
      gridColumn: false,
      gridColumnStart: false,
      gridColumnEnd: false,
      gridTemplateRows: false,
      gridRow: false,
      gridRowStart: false,
      gridRowEnd: false,
      gap: false,
      maxHeight: false,
      objectPosition: false,
      transformOrigin: false,
      transitionTimingFunction: false,
    },
    extend: {
      inset: {
        '1/2': '50%',
      },
      minHeight: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-action-gradient': {
          backgroundColor: '#382fee',
          background:
            'linear-gradient(90deg, rgba(56,47,238,1) 0%, rgba(121,59,252,1) 100%)',
        },
      })
    }),
  ],
  purge: ['./**/*.tsx'],
}
