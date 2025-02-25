import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

type BottomSheetContextType = {
  openBottomSheet: (component: ReactNode, title?: string) => void;
  closeBottomSheet: () => void;
  isOpen: boolean;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
  undefined,
);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }
  return context;
};

export const BottomSheetProvider = ({children}: {children: ReactNode}) => {
  const modalizeRef = useRef<Modalize>(null);
  const [content, setContent] = useState<ReactNode>(null);
  const [headerTitle, setHeaderTitle] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Memo hóa hàm mở Bottom Sheet
  const openBottomSheet = useCallback(
    (component: ReactNode, title: string = 'Mua hàng') => {
      setContent(component);
      setHeaderTitle(title);
      setIsOpen(true); // Đánh dấu sheet đang mở
    },
    [],
  );

  // Memo hóa hàm đóng Bottom Sheet
  const closeBottomSheet = useCallback(() => {
    modalizeRef.current?.close();
  }, []);

  // Mở bottom sheet khi `isOpen` thay đổi
  useEffect(() => {
    if (isOpen) {
      modalizeRef.current?.open();
    }
  }, [isOpen]);

  // Xử lý sự kiện đóng modal
  const handleOnClose = () => {
    setIsOpen(false); // Đánh dấu sheet đã đóng
  };

  return (
    <BottomSheetContext.Provider
      value={{openBottomSheet, closeBottomSheet, isOpen}}>
      {children}

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        keyboardAvoidingBehavior="position"
        disableScrollIfPossible={false}
        panGestureEnabled={false}
        withHandle={false}
        onClose={handleOnClose} // Lắng nghe sự kiện đóng sheet
        HeaderComponent={
          <View style={styles.bottomSheetHeader}>
            <Text variant="titleSmall">{headerTitle}</Text>
            <TouchableOpacity onPress={closeBottomSheet}>
              <Icon name="close-outline" size={24} />
            </TouchableOpacity>
          </View>
        }>
        <View style={styles.contentContainer}>{content}</View>
      </Modalize>
    </BottomSheetContext.Provider>
  );
};

const styles = StyleSheet.create({
  bottomSheetHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
  },
});
