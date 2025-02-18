import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
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
  titleBody: {
    fontSize: 18,
    marginBottom: 24,
    lineHeight: 24,
  },
  form: {
    gap: 12,
  },
  footer: {
    marginTop: 8,
    width: '100%',
  },
  footerBox: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  footerContent: {
    textAlign: 'right',
  },
  button: {
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default styles;
