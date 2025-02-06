import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  agencyWrapped: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  agencyItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  agencyItemHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
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
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    zIndex: 1,
  },
});

export default styles;
