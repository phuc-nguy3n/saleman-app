import {StyleSheet, Text, TextInput} from 'react-native';
import {Fonts} from '../config/const';
import {customTheme} from '../theme/customTheme';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {fontFamily: Fonts.HelveticaRegular};

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.style = {fontFamily: Fonts.HelveticaRegular};

const {colors} = customTheme;

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

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
  bgTertiary: {
    backgroundColor: colors.tertiary,
  },
  bgYellowLight: {
    backgroundColor: colors.yellowLight,
  },
  bgGreenLight: {
    backgroundColor: colors.greenLight,
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
    color: colors.tertiary,
  },
  lineColor: {
    borderColor: colors.divider,
  },
  outlineColor: {
    color: colors.outline,
  },
  linkColor: {
    color: colors.link,
  },
  errorColor: {
    color: colors.error,
  },
  textSecondColor: {color: colors.textSecond},
  greenColor: {color: colors.green},

  //   Font size
  fontSmall: {
    fontSize: 12,
  },
  fontMedium: {
    fontSize: 16,
  },
  fontLarge: {
    fontSize: 20,
  },
  fontExtraLarge: {
    fontSize: 24,
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
