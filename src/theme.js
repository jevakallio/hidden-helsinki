import {px} from './screen';

export const colors = {
  magenta: '#7F1637',
  green: '#047878',
  yellow: '#FFB733',
  orange: '#F57336',
  red: '#C22121',
  white: '#FFFFFF'
};

export const fonts = {
  title: {...baseFont(220), fontWeight: 'bold'},
  large: baseFont(120),
  medium: baseFont(80),
  small: baseFont(40)
};

function baseFont(size) {
  return {
    color: colors.white,
    fontFamily: 'System',
    fontSize: Math.floor(px(size))
  };
}
