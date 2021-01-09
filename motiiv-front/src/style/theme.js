const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
};

const theme = {
  primary: '#2cff2c',
  darkGray: '#4e4e4e',
  gray: '#a7a7a7',
  lightGray: '#f3f3f3',

  mobile375: `(max-width: ${size.mobile})`,
  mobile: `(max-width: ${size.tablet})`,
  tablet768: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  maxlaptop : `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  maxdesktop: `(max-width: ${size.desktop})`
};

export default theme;
