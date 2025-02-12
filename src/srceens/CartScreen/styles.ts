import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searhBar: {
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
    borderColor: '#9AA7AA',
  },
  searchIcon: {position: 'absolute', left: 10},
  searchInput: {
    paddingHorizontal: 10,
    flex: 1,
    paddingLeft: 40,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fafafa',
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
});

export default styles;
