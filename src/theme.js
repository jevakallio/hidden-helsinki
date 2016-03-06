import {px} from './screen';

export const colors = {
  magenta: '#F2385A',
  yellow: '#F5A503',
  blue: '#4AD9D9',
  green: '#36B1BF',
  cream: '#E9F1DF',
  white: '#FFFFFF',
  red: '#B01B2C'
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
