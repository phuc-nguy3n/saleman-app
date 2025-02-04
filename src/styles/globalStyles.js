import {StyleSheet, Text, TextInput} from 'react-native';
import {Colors, Fonts, FontSizes} from '../config/const';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {fontFamily: Fonts.HelveticaRegular};

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.style = {fontFamily: Fonts.HelveticaRegular};

const globalStyles = StyleSheet.create({
  // Background color
  bgError: {
    backgroundColor: Colors.bgError,
  },

  // Color
  whiteColor: {
    color: 'white',
  },
  primaryColor: {
    color: Colors.primary,
  },

  errorColor: {
    color: Colors.error,
  },

  //   Font size
  fontSmall: {
    fontSize: FontSizes.small,
  },
  fontMedium: {
    fontSize: FontSizes.medium,
  },
  fontLarge: {
    fontSize: FontSizes.large,
  },
  fontExtraLarge: {
    fontSize: FontSizes.extraLarge,
  },

  //   Font weight
  fontWeightThin: {
    fontWeight: '100',
  },
  fontWeightLight: {
    fontWeight: '300',
  },
  fontWeightRegular: {
    fontWeight: '400',
  },
  fontWeightMedium: {
    fontWeight: '500',
  },
  fontWeightBold: {
    fontWeight: '700',
  },

  //   Font style
  underline: {
    textDecorationLine: 'underline',
  },
});

export default globalStyles;
