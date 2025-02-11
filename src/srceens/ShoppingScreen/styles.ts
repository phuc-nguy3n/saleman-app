import {StyleSheet} from 'react-native';
import {Colors} from '../../config/const';

const styles = StyleSheet.create({
  carouselBg: {width: '100%', height: 232, marginBottom: 12},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 12,
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
    borderColor: '#9AA7AA',
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
  cateContainer: {marginBottom: 26},
  cateTitleBox: {marginHorizontal: 16, marginBottom: 8},
  cateBox: {
    flexDirection: 'row',
    marginRight: 20,
    gap: 12,
  },
  cateItem: {alignItems: 'center', gap: 4},
  cateItemIconBox: {
    boxShadow: 'rgba(230, 243, 248, 0.8) 0px 1px 4px',
    backgroundColor: 'white',
    borderColor: '#E6F3F8',
    borderWidth: 1,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginHorizontal: 4,
  },
  productTitleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: Colors.primary,
    borderRadius: 50,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
