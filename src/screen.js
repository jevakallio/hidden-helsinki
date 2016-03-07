import {Dimensions, PixelRatio} from 'react-native';

const window = Dimensions.get('window');

export const screenHeight = window.height;
export const screenWidth = window.width;
export function dpi(size) {
  return size / PixelRatio.get();
}

export function px(size) {
  return vw(size) / 10;
}

export function vw(percentageWidth) {
  return window.width * (percentageWidth / 100);
}

export function vh(percentageHeight) {
  return window.height * (percentageHeight / 100);
}
