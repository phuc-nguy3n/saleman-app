import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bgImg: {
    height: 174,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBox: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 12,
  },
  imgBox: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
  },
  img: {width: 70, height: 70},
  text: {fontSize: 14, fontWeight: 400},
});

export default styles;
