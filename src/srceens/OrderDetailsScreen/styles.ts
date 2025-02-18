import {StyleSheet} from 'react-native';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderStatusBox: {
    borderRadius: 10,
    backgroundColor: colors.gray,
  },
  orderStatusText: {
    fontSize: 10,
    lineHeight: 16,
  },
  orderInfoContentArea: {marginTop: 4, gap: 4},
  orderInfoContentBox: {flexDirection: 'row', gap: 8},
  orderInfoContent: {
    color: colors.textSecond,
    lineHeight: 18,
  },
  orderDetailsBox: {flexDirection: 'row', alignItems: 'center', gap: 16},
  productImgBox: {
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  productImg: {width: 70, height: 70, objectFit: 'cover'},
  provisional: {
    gap: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    paddingBottom: 8,
  },
});

export default styles;
