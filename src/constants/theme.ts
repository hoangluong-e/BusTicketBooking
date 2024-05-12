import { Dimensions, Platform, StatusBar } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV
  ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
  : false;

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0
})
const COLORS = {
  primary: '#8f70ef',
  primary2: '#d6c3fb',
  gray: '#83829A',
  gray2: '#C1C0C8',
  gray3: '#efeff1',
  offwhite: '#F3F4F8',
  white: '#FFFFFF',
  black: '#000000',
  black2: '#333333',
  red: '#e81e4d',
  green: ' #00C135',
  lightWhite: '#FAFAFC',
  blue: '#0000FF',
  blue2: '#4d5e8b'
};

const SIZES = {
  xxSmall: 10,
  xSmall: 12,
  small: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,


};

export { COLORS, SIZES };
