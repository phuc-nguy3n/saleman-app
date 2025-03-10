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
import {customTheme} from '../theme/customTheme';
import {OverviewPrice, Product, RootStackParamList, ScreenType} from '../types';
import ShoppingComponent from '../srceens/ShoppingScreen/components/ShoppingComponent';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ProductsComponents from '../srceens/ProductsScreen/components/ProductsComponents';
import CartComponent from '../srceens/CartScreen/components/CartComponent';
import ProductDetailsComponents from '../srceens/ProductDetailsScreen/components/ProductDetailsComponents';

const {colors} = customTheme;

type BottomSheetContextType = {
  openBottomSheet: (componentType: string, title?: string) => void;
  closeBottomSheet: () => void;
  content: string;
  setContent: (componentType: string) => void;
  isOpen: boolean;
  bottomBarHeight: number;
  setBottomBarHeight: (height: number) => void;
  product: Product | undefined;
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
  isKeyboardVisible: boolean;
  setIsKeyboardVisible: React.Dispatch<React.SetStateAction<boolean>>;
  overviewPrice: OverviewPrice | undefined;
  setOverviewPrice: React.Dispatch<
    React.SetStateAction<OverviewPrice | undefined>
  >;
  cateProduct: string;
  setCateProduct: React.Dispatch<React.SetStateAction<string>>;
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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [content, setContent] = useState<string>('');
  const [headerTitle, setHeaderTitle] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bottomBarHeight, setBottomBarHeight] = useState<number>(0);
  const [product, setProduct] = useState<Product | undefined>();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
  const [overviewPrice, setOverviewPrice] = useState<
    OverviewPrice | undefined
  >();

  const [cateProduct, setCateProduct] = useState<string>('');

  // Memo hóa hàm mở Bottom Sheet
  const openBottomSheet = useCallback(
    (componentType: string, title: string = 'Header title') => {
      setContent(componentType);
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

  const generateLayout = (screenType: string) => {
    switch (screenType) {
      case ScreenType.shopping:
        return <ShoppingComponent navigation={navigation} />;

      case ScreenType.products:
        return <ProductsComponents navigation={navigation} />;

      case ScreenType.productDetails:
        return <ProductDetailsComponents navigation={navigation} />;

      case ScreenType.cart:
        return <CartComponent navigation={navigation} />;

      default:
        return <ShoppingComponent navigation={navigation} />;
    }
  };

  return (
    <BottomSheetContext.Provider
      value={{
        openBottomSheet,
        closeBottomSheet,
        content,
        setContent,
        isOpen,
        bottomBarHeight,
        setBottomBarHeight,
        product,
        setProduct,
        isKeyboardVisible,
        setIsKeyboardVisible,
        overviewPrice,
        setOverviewPrice,
        cateProduct,
        setCateProduct,
      }}>
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
        <View style={styles.contentContainer}>{generateLayout(content)}</View>
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
    borderBottomWidth: 1,
    borderColor: colors.divider,
  },
  contentContainer: {
    flex: 1,
  },
});
