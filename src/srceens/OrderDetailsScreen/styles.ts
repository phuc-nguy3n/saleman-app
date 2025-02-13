import {StyleSheet} from 'react-native';
import {Colors} from '../../config/const';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderStatusBox: {
    borderRadius: 10,
    backgroundColor: '#e9e9e9',
  },
  orderStatusText: {
    fontSize: 10,
    lineHeight: 16,
  },
  orderInfoContentArea: {marginTop: 4, gap: 4},
  orderInfoContentBox: {flexDirection: 'row', gap: 8},
  orderInfoContent: {
    color: Colors.textSecond,
    lineHeight: 18,
  },
  orderDetailsBox: {flexDirection: 'row', alignItems: 'center', gap: 16},
  productImgBox: {
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.line,
  },
  productImg: {width: 70, height: 70, objectFit: 'cover'},
  provisional: {
    gap: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.line,
    paddingBottom: 8,
  },
});

export default styles;
