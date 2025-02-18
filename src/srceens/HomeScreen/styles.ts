import {StyleSheet} from 'react-native';
import {customTheme} from '../../theme/customTheme';

const {colors} = customTheme;

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
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarBox: {
    justifyContent: 'center',
    alignItems: 'center',
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
  wrapped: {
    width: '100%',

    borderRadius: 8,
    overflow: 'hidden',
  },
  toDoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  toDoItemWrapped: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toDoItemBox: {
    alignItems: 'center',
    width: '25%',
  },
  toDoItemIcon: {
    width: 16,
    height: 16,
  },
  toDoItemContentBox: {
    alignItems: 'center',
    marginTop: 4,
  },
  toDoItemText: {
    fontSize: 18,
    fontWeight: 500,
  },
  toDoItemUnit: {
    fontSize: 10,
    fontWeight: 300,
  },
  toDoItemFooterBox: {
    padding: 8,
    borderRadius: 4,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  actionWrapped: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },
  actionBox: {
    width: '50%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 110,
  },
  actionImg: {
    width: 50,
    height: 50,
  },
  actionText: {
    marginTop: 8,
  },
  orderStatusWrapped: {
    flexDirection: 'row',
  },
  orderStatusBox: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderStatusItem: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    position: 'relative',
  },
  orderQuantityDot: {
    minWidth: 20,
    minHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.error,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 4,
  },
  orderQuantityText: {
    padding: 4,
    color: 'white',
    fontSize: 10,
  },
  orderStatusImg: {
    width: 40,
    height: 40,
  },
  btnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default styles;
