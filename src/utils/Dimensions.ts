import { Dimensions, PixelRatio } from 'react-native';
// import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
// import {getStatusBarHeight} from 'react-native-status-bar-height';
// export const STATUS_BAR_HEIGHT =
//   StaticSafeAreaInsets.safeAreaInsetsTop > getStatusBarHeight()
//     ? StaticSafeAreaInsets.safeAreaInsetsTop
//     : getStatusBarHeight();
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT_SCREEN = Dimensions.get('screen').height;
export const SCREEN_WIDTH_SCREEN = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SMALL_DEVICE = SCREEN_HEIGHT < 720;
export const DESIGN_HEIGHT = 852;
export const DESIGN_WIDTH = 393;
export const hundred = 100;

// It is based on the screen width of your design layouts e.g Height 600 x Width 375
const scale = SCREEN_WIDTH / DESIGN_WIDTH;

export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

export const vw = (width: number) => {
  let percent = (width / DESIGN_WIDTH) * hundred;
  const elemWidth = parseFloat(`${percent}`);
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / hundred);
};

export const vh = (height: number) => {
  let percent = (height / DESIGN_HEIGHT) * hundred;
  const elemHeight = parseFloat(`${percent}`);
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / hundred);
};
export const BANNER = {
  height: vw(50),
  width: vw(DESIGN_WIDTH),
};

export default {
  vh,
  vw,
  normalize,
  DESIGN_HEIGHT,
  DESIGN_WIDTH,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  BANNER,
};
