import {StyleSheet, Text, TextInput} from 'react-native';
import {Colors, Fonts, FontSizes} from '../config/const';
import {customTheme} from '../theme/customTheme';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {fontFamily: Fonts.HelveticaRegular};

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.style = {fontFamily: Fonts.HelveticaRegular};

const {colors} = customTheme;

const globalStyles = StyleSheet.create({
  // Padding
  pv4: {
    paddingVertical: 4,
  },
  pv8: {
    paddingVertical: 8,
  },
  pv16: {
    paddingVertical: 16,
  },
  ph4: {
    paddingHorizontal: 4,
  },
  ph8: {
    paddingHorizontal: 8,
  },
  ph16: {
    paddingHorizontal: 16,
  },

  // Margin
  mv4: {
    marginVertical: 4,
  },
  mv8: {
    marginVertical: 8,
  },
  mv16: {
    marginVertical: 16,
  },
  mh4: {
    marginHorizontal: 4,
  },
  mh8: {
    marginHorizontal: 8,
  },
  mh16: {
    marginHorizontal: 16,
  },

  // Background color
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  bgError: {
    backgroundColor: colors.errorContainer,
  },
  bgThird: {
    backgroundColor: Colors.third,
  },
  bgYellowLight: {
    backgroundColor: Colors.yellowLight,
  },
  bgGreenLight: {
    backgroundColor: Colors.greenLight,
  },
  bgWhite: {
    backgroundColor: 'white',
  },

  // Color
  whiteColor: {
    color: 'white',
  },
  primaryColor: {
    color: colors.primary,
  },
  thirdColor: {
    color: Colors.third,
  },
  lineColor: {
    borderColor: Colors.line,
  },
  outlineColor: {
    color: Colors.outline,
  },
  linkColor: {
    color: Colors.link,
  },
  errorColor: {
    color: Colors.error,
  },
  textSecondColor: {color: Colors.textSecond},
  greenColor: {color: Colors.green},

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
