import {StyleSheet} from 'react-native';
import {Colors} from '../../config/const';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerBox: {
    width: '100%',
    position: 'relative',
  },
  headerBackground: {
    width: '100%',
    height: 160,
  },
  headerContentBox: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
  },
  bodyScroll: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 100,
  },
  toDoBox: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  toDoHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.line,
  },
  toDoItemBox: {
    marginTop: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
