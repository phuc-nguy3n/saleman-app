import {StyleSheet} from 'react-native';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

const styles = StyleSheet.create({
  backNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  backIconBack: {
    width: 24,
    height: 24,
    marginLeft: -12,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
    width: '100%',
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
  orderEmpty: {
    width: '100%',
    height: 234,
  },
  ordersBox: {
    marginTop: 8,
    maxHeight: 234,
    width: '100%',
    position: 'relative',
    zIndex: 1000,
  },
  itemBox: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 16,
    alignContent: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderColor: colors.divider,
    borderWidth: 1,
  },
  itemInfoBox: {
    flexShrink: 1,
    width: '100%',
  },
  actionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: colors.lightGray,
  },
  noteBox: {
    borderColor: colors.outline,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  button: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  count: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 15,
  },
  billOrderFixed: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
  },
  billOrderBox: {
    width: '100%',
    minHeight: 224,
    paddingHorizontal: 16,
    boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
  },
  tempPriceBox: {
    paddingVertical: 8,
    borderBottomColor: colors.divider,
    borderBottomWidth: 1,
    gap: 8,
  },
  tempPriceitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
