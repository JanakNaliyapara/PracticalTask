import { Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const relativeWidth = (num: number): number => (DEVICE_WIDTH * num) / 100;

const relativeHeight = (num: number): number => (DEVICE_HEIGHT * num) / 100;

export default {
  relativeWidth,
  relativeHeight,
};
