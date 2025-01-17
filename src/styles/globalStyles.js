import {Text, TextInput} from 'react-native';
import {Fonts} from '../config/const';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {fontFamily: Fonts.HelveticaRegular};

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.style = {fontFamily: Fonts.HelveticaRegular};
