const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '128z0px',
};

const theme = {
  primary: '#2cff2c',
  darkGray: '#4e4e4e',
  gray: '#a7a7a7',
  lightGray: '#f3f3f3',
  mobile: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
