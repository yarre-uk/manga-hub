const theme = {
  colours: {
    primary: '#379634',
    secondary: '#156064',
    tertiary: '#BC9EC1',
    danger: '#ff4d4f',
    warning: '#faad14',
    success: '#52c41a',
    info: '#1890ff',

    background: '#141414',
    foreground: {
      basic: '#1c1c1e',
      light: '#282828',
    },

    backdrop: 'rgba(0, 0, 0, 0.4)',
  },

  font: {
    family: 'Roboto, sans-serif',
    size: {
      small: '0.9rem',
      normal: '1.05rem',
      semiLarge: '1.1rem',
      large: '1.25rem',
      huge: '1.35rem',
    },
    color: {
      light: '#ddd',
      dark: '#191919',
    },
  },

  border: {
    width: '3px',
    radius: '5px',
    colour: '#282828',
  },
} as const;

export default theme;
