import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Styles = StyleSheet.create({
  Black: {
    fontFamily: 'Poppins-Black',
  },
  Bold: {
    fontFamily: 'Poppins-Bold',
  },
  SemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  ExtraBold: {
    fontFamily: 'Poppins-ExtraBold',
  },
  Medium: {
    fontFamily: 'Poppins-Medium',
  },
  Light: {
    fontFamily: 'Poppins-Light',
  },
  ExtraLight: {
    fontFamily: 'Poppins-ExtraLight',
  },
  Thin: {
    fontFamily: 'Poppins-Thin',
  },
  Regular: {
    fontFamily: 'Poppins-Regular',
  },
  ColorGreen: {
    color: `${Colors.Green}`,
  },
  BgGreen: {
    backgroundColor: `${Colors.Green}`,
  },
  ColorYellow: {
    color: `${Colors.Yellow}`,
  },
  BgYellow: {
    backgroundColor: `${Colors.Yellow}`,
  },
  ColorRed: {
    color: `${Colors.Red}`,
  },
  BgRed: {
    backgroundColor: `${Colors.Red}`,
  },
  Card: {
    backgroundColor: '#fff',
    elevation: 2,
  },
});

export default Styles;
