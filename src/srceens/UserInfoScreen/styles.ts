import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bgScreen: {
    flex: 1,
  },
  bgImg: {
    height: 174,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },
  imgBox: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
  },
  img: {width: 70, height: 70},
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  buttonWrapperLeft: {flexDirection: 'row', alignItems: 'center', gap: 8},
  body: {justifyContent: 'space-between', flex: 1},
});

export default styles;
