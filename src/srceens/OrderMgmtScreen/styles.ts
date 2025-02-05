import {StyleSheet} from 'react-native';
import {Colors} from '../../config/const';

const styles = StyleSheet.create({
  categories: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 'auto',
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  categoryItemText: {
    fontSize: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    paddingVertical: 0,
    paddingLeft: 10,
    paddingRight: 30,
  },
  orderItemWrapped: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 4,
  },
  orderItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  orderNavigationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  orderItemBody: {paddingTop: 8, flexDirection: 'row', gap: 8},
  orderItemImg: {
    width: 86,
    height: 86,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.line,
  },
  orderItemTextArea: {
    gap: 4,
    width: '70%',
  },
  orderItemProductName: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default styles;
