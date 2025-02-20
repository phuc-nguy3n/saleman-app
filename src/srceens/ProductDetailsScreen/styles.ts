import {StyleSheet} from 'react-native';
import {customTheme} from '../../theme/customTheme';
const {colors} = customTheme;

const styles = StyleSheet.create({
  carouselBg: {
    width: '100%',
    height: 375,
    borderBottomWidth: 1,
    borderColor: colors.outline,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  headerBox: {
    marginTop: 18,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productsItem: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  productItemImage: {
    width: '100%',
    height: 165,
    marginBottom: 10,
    borderRadius: 8,
  },
  productContentArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addIconBox: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
