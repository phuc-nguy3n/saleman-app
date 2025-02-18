import {StyleSheet} from 'react-native';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  agencyWrapped: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  agencyItem: {
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: 4,
    paddingHorizontal: 16,
  },
  agencyItemHeader: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.dividerSecond,
  },
  agencyNameArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  quantityOrdersBox: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
  },
  agencyItemBody: {
    paddingVertical: 8,
    gap: 8,
  },
  agencyInfoWrapped: {
    flexDirection: 'row',
    gap: 16,
  },
  agencyInfoArea: {
    width: '60%',
    gap: 8,
    justifyContent: 'center',
  },
  agencyInfoContent: {
    flexDirection: 'row',
    gap: 8,
  },
  agencyActionWrapped: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  agencyActionBtn: {
    paddingVertical: 8,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
  },
  agencyActionBtnIcon: {
    width: 24,
    height: 24,
  },
  lineHeightText: {
    lineHeight: 16,
  },
  noteWrapped: {
    backgroundColor: 'white',
    marginBottom: 8,
    gap: 8,
  },
  imageCheckInWrapped: {
    backgroundColor: 'white',
    gap: 8,
  },
  imageCheckInBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkinBtnArea: {
    backgroundColor: 'white',
    paddingTop: 8,
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
});

export default styles;
