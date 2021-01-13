const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
};

const theme = {
  primary: '#2cff2c',
  darkGray: '#4e4e4e', // motiiv_gray
  gray: '#a7a7a7', // motiiv_gray_2
  lightGray: '#f3f3f3', // motiiv_gray_bg
  // 다크모드 컬러
  keyWordGray: '#6c6c6c',
  darkBg: '#2f2f2f',
  darkBg2: '#161616',

  // 브레이크 포인트
  mobile375: `(max-width: ${size.mobile})`,
  mobile: `(max-width: ${size.tablet})`,
  tablet768: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  maxlaptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  maxdesktop: `(max-width: ${size.desktop})`,
};

export default theme;
