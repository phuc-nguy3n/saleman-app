import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerBox: {
    width: '100%',
    position: 'relative',
  },
  headerBackground: {
    width: '100%',
    height: 160,
  },
  headerContentBox: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
  },
});

export default styles;
