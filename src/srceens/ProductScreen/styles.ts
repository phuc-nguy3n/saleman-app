import {StyleSheet} from 'react-native';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  searhBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.outline,
  },
  searchIcon: {position: 'absolute', left: 10},
  searchInput: {
    paddingHorizontal: 10,
    flex: 1,
    paddingLeft: 40,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  cateContainer: {marginBottom: 16},
  cateBox: {
    flexDirection: 'row',
    marginRight: 20,
    gap: 12,
  },
  cateItem: {flexDirection: 'row', alignItems: 'center', gap: 4},
  cateItemIconBox: {
    flexDirection: 'row',
    boxShadow: colors.shadow,
    backgroundColor: 'white',
    borderColor: colors.tertiary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginHorizontal: 4,
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
