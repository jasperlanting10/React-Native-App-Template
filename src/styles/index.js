import {StyleSheet, Dimensions} from 'react-native';
const AppStyles = StyleSheet.create({
  smallIcon: {
    height: Dimensions.get('screen').height * 0.025,
    width: Dimensions.get('screen').height * 0.025,
  },
  mediumIcon: {
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').height * 0.05,
  },
  largeIcon: {
    height: Dimensions.get('screen').height * 0.75,
    width: Dimensions.get('screen').height * 0.75,
  },
});

const Theme = StyleSheet.create({
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 22,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 18,
  },
  body1: {
    fontSize: 18,
  },
  body2: {
    fontSize: 16,
  },
  body2: {
    fontSize: 16,
  },
});

const Colors = {
  white: '#fff',
  orange: '#FDB100',
  black: '#2b2b2b',
  green: '#00ff00',
  red: '#ff0000',
  backgroundGray: '#f6f6f6',
};

const BorderRadius = {
  SmallBorderRadius: 6,
  MediumBorderRadius: 12,
  LargeBorderRadius: 24,
};

const Paddings = {
  SmallPadding: 6,
  MediumPadding: 12,
  LargePadding: 18,
  XLargePadding: 24,
};

export {AppStyles, Theme, Colors, Paddings, BorderRadius};
