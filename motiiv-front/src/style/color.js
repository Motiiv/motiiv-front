import theme from './theme';
//console.log('t', theme);
const whiteColors = {
  background: 'white',
  categorytext: 'black',
  modalbackground: 'white',
  tag: 'black',
  taghover: theme.primary,
  keywordtag: 'black',
  settingbtn: 'white',
  settingbtnbg: theme.gray,
  topbg: theme.lightGray,
  cardbody: 'white',
  cardsub: theme.darkGray,
  bodybg: 'white',
  swiperafter: 'black',
  footercontent: 'none',
  sortbg: theme.lightGray,
};
const darkColors = {
  background: 'black',
  categorytext: 'white',
  modalbackground: theme.darkBg2,
  tag: theme.primary,
  taghover: 'white',
  keywordtag: theme.primary,
  settingbtn: 'white',
  settingbtnbg: theme.darkGray,
  topbg: theme.darkBg2,
  cardbody: theme.darkBg,
  cardsub: theme.gray,
  bodybg: theme.darkBg,
  swiperafter: theme.lightGray,
  footercontent: 'opacity(0.5)',
  sortbg: theme.primary,
};

export { whiteColors, darkColors };
