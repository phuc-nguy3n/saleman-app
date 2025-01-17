import {StyleSheet} from 'react-native';
import {Colors} from '../../config/const';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 114,
    height: 67,
  },
  header: {
    marginBottom: 32,
  },
  body: {
    justifyContent: 'center',
    width: '100%',
  },
  color: {
    color: Colors.primary,
  },
  form: {
    gap: 12,
  },
  footer: {
    marginTop: 8,
    width: '100%',
  },
  box: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  medium: {
    fontWeight: '500',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  error: {
    color: Colors.error,
  },
});

export default styles;
