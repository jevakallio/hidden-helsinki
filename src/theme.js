import {px} from './screen';
import {reduce, partial} from 'lodash';

export const transparent = {
  magenta: partial(rgba, 242, 56, 90),
  yellow: partial(rgba, 245, 165, 3),
  cream: partial(rgba, 233, 241, 223),
  blue: partial(rgba, 74, 217, 217),
  green: partial(rgba, 54, 177, 191),
  red: partial(rgba, 176, 27, 44),
  white: partial(rgba, 255, 255, 255)
};

export const colors = reduce(transparent, (solids, value, key) => ({
  ...solids, [key]: value(1)
}), {});

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

function rgba(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
